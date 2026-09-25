let tasks = [ 
  { id: 1, title: 'Изучить JS', completed: false }, 
  { id: 2, title: 'Сделать ДЗ', completed: true } 
]; 

let taskInput = document.querySelector('#taskInput'); 
let addButton = document.querySelector('#addButton'); 
let taskList = document.querySelector('#taskList'); 
let total = document.querySelector('#total'); 
let completed = document.querySelector('#completed'); 

let showTasks = () => { 
  taskList.innerHTML = ""; 
  // ИСПРАВЛЕНО: было task.map, стало tasks.map
  tasks.map(task => { 
    taskList.innerHTML += ` 
      <div class="task"> 
        <span class="task-text ${task.completed ? "completed": ""}"> ${task.title} </span> 
        <div class="actions"> 
          <button class="done" onclick="completeTask(${task.id})" > ✅ </button> 
          <button class="delete" onclick="deleteTask(${task.id})" > ❌ </button> 
        </div> 
      </div> `; 
  }); 
  updateInfo(); 
}; 

let addTask = () => { 
  let text = taskInput.value.trim(); 
  if (text === '') { 
    alert('Введите задачу!'); 
    return; 
  } 
  // ИСПРАВЛЕНО: было tite, стало title
  let newTask = { 
    id: Date.now(), 
    title: text, 
    completed: false 
  }; 
  tasks.push(newTask); 
  taskInput.value = ""; 
  showTasks(); 
}; 

let completeTask = (id) => { 
  let task = tasks.find(task => task.id === id); 
  if (task) { // Хорошая практика: проверить, нашлась ли задача
    task.completed = !task.completed; 
  }
  showTasks(); 
}; 

let deleteTask = (id) => { 
  tasks = tasks.filter(task => task.id !== id); 
  showTasks(); 
}; 

let updateInfo = () => { 
  total.textContent = tasks.length; 
  // ИСПРАВЛЕНО: добавлена закрывающая скобка } в filter
  let completedTasks = tasks.filter(task => task.completed); 
  // ИСПРАВЛЕНО: было completedTask, стало completedTasks
  completed.textContent = completedTasks.length; 
}; 

addButton.addEventListener("click", addTask); 
showTasks();
