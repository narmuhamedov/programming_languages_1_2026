const DATA_URL = 'data.json';
const productGrid = document.getElementById('product-grid');
const detailSection = document.getElementById('detail-section');
const detailCard = document.getElementById('detail-card');
const closeBtn = document.getElementById('close-btn');

let productsData = [];

async function loadProduct() {
    try{
        const response = await fetch(DATA_URL);
        if (!response.ok) throw new Error(`Ошибка: ${response.status}`);

        productsData = await response.json();
        renderProductsList(productsData);
    }catch(error){
        console.error('Ошибка JSON',error);
        productGrid.innerHTML = '<p style="color: red;">Error!</p>'
    }
}

function renderProductsList(products){
    productGrid.innerHTML = '';

    products.forEach(product=>{
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
        <img src="${product.image}">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.price.toLocaleString()}</p>
        </div>
        `;
        card.addEventListener('click', ()=> showProductDetail(product.id));
        productGrid.appendChild(card);
    });

}

/*Detail*/ 

function showProductDetail(product_id){
    const product = productsData.find(p=> p.id === product_id);
    if (!product) return;

    const specsList = Object.entries(product.specs)
    .map(( [key, value] ) => `<li><strong> ${key} </strong>${value}</li>`)
    .join('')

    detailCard.innerHTML = 
    `<div class='detail-layout'>
    <h2>${product.name}</h2>
    <img src='${product.image}' alt='${product.name}' class='detail-img'>
    <p class='detail-desc'>${product.description}</p>
    <div class='detail-specs'>
        <strong>Технические характеристики</strong>
        <ul style='margin-top: 10px'>${specsList}</ul>
    </div>
    <p class='product-price' style='font-size: 1.5rem;'>${product.price.toLocaleString()} сом</p>
    </div>
    `;

    detailSection.classList.remove('hidden'); // модалка
}

closeBtn.addEventListener('click', ()=>detailSection.classList.add('hidden'));
detailSection.addEventListener('click', (e)=>{
    if (e.target === detailSection) detailSection.classList.add('hidden')
});

document.addEventListener('DOMContentLoaded', loadProduct())

