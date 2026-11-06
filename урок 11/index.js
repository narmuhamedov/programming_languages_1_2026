const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const postForm = document.getElementById('postForm');
const postIdInput = document.getElementById('postId');
const postTitleInput = document.getElementById('postTitle');
const postBodyInput = document.getElementById('postBody');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const postsContainer = document.getElementById('postsContainer');

let localPosts = [];

// Экранирование HTML для защиты от XSS
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// READ
async function fetchPosts() {
    try {
        const response = await fetch(`${API_URL}?_limit=5`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        localPosts = await response.json();
        renderPosts();
    } catch (error) {
        console.error('Ошибка загрузки:', error);
        localPosts = [];
        postsContainer.innerHTML = '<p>Не удалось загрузить данные</p>';
    }
}

function renderPosts() {
    postsContainer.innerHTML = '';
    if (localPosts.length === 0) {
        postsContainer.innerHTML = '<p>Постов нет!</p>';
        return;
    }

    localPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post-item';
        postDiv.innerHTML = `
            <h3>${escapeHtml(post.title)}</h3>
            <p>${escapeHtml(post.body)}</p>
            <button data-action="edit" data-id="${post.id}">Редактировать</button>
            <button data-action="delete" data-id="${post.id}">Удалить</button>
        `;
        postsContainer.appendChild(postDiv);
    });
}

// Делегирование событий — надёжнее, чем inline onclick
postsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (btn.dataset.action === 'edit') prepareUpdate(id);
    if (btn.dataset.action === 'delete') deletePost(id);
});

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = postIdInput.value;
    const title = postTitleInput.value.trim();
    const body = postBodyInput.value.trim();

    if (!title || !body) {
        alert('Заполните заголовок и текст поста');
        return;
    }

    const postData = { title, body, userId: 1 };

    if (id) {
        // UPDATE
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ id: Number(id), ...postData }),
                headers: { 'Content-Type': 'application/json; charset=UTF-8' }
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const updatedPost = await response.json();

            localPosts = localPosts.map(p =>
                p.id === Number(id) ? updatedPost : p
            );
            resetForm();
            renderPosts();
            alert(`Пост с ID ${id} успешно обновлён`);
        } catch (error) {
            console.error('Ошибка при обновлении:', error);
            alert('Не удалось обновить пост');
        }
    } else {
        // CREATE
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: { 'Content-Type': 'application/json; charset=UTF-8' }
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const newPost = await response.json();

            // JSONPlaceholder возвращает id=101 всегда — генерируем локальный
            newPost.id = localPosts.length
                ? Math.max(...localPosts.map(p => p.id)) + 1
                : 1;

            localPosts.unshift(newPost);
            resetForm();
            renderPosts();
            alert('Пост успешно добавлен');
        } catch (error) {
            console.error('Ошибка при создании:', error);
            alert('Не удалось создать пост');
        }
    }
});

function prepareUpdate(id) {
    const post = localPosts.find(p => p.id === Number(id));
    if (!post) return;

    postIdInput.value = post.id;
    postTitleInput.value = post.title;
    postBodyInput.value = post.body;

    submitBtn.textContent = 'Сохранить изменения';
    cancelBtn.style.display = 'inline-block';
    window.scrollTo(0, 0);
}

async function deletePost(id) {
    id = Number(id);
    if (!confirm('Удалить этот пост?')) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        // DELETE в JSONPlaceholder возвращает 200/204; принимаем оба
        if (!response.ok && response.status !== 204) {
            throw new Error(`HTTP ${response.status}`);
        }

        localPosts = localPosts.filter(p => p.id !== id);
        renderPosts();
        alert(`Пост с ID ${id} успешно удалён`);
    } catch (error) {
        console.error('Ошибка при удалении:', error);
        alert('Не удалось удалить пост');
    }
}

function resetForm() {
    postIdInput.value = '';
    postForm.reset();
    submitBtn.textContent = 'Создать пост';
    cancelBtn.style.display = 'none';
}

cancelBtn.addEventListener('click', resetForm);

// Инициализация
fetchPosts();