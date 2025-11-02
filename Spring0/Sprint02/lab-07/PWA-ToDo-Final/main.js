import { openDB } from 'https://cdn.jsdelivr.net/npm/idb@8.0.3/build/esm/index.js';

const dbPromise = openDB('todo-db', 1, {
  upgrade(db) {
    db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
  },
});

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

async function addTask(task) {
  const db = await dbPromise;
  await db.add('tasks', { text: task });
  renderTasks();
}

async function deleteTask(id) {
  const db = await dbPromise;
  await db.delete('tasks', id);
  renderTasks();
}

async function getTasks() {
  const db = await dbPromise;
  return await db.getAll('tasks');
}

async function renderTasks() {
  const tasks = await getTasks();
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.text;
    const btn = document.createElement('button');
    btn.textContent = 'Borrar';
    btn.onclick = () => deleteTask(task.id);
    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

// Añadir tarea
taskForm.addEventListener('submit', e => {
  e.preventDefault();
  if (taskInput.value.trim()) {
    addTask(taskInput.value.trim());
    taskInput.value = '';
  }
});

// Registrar Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { type: 'module' })
    .then(() => console.log('Service Worker registrado'))
    .catch(console.error);
}

// Inicializar
renderTasks();
