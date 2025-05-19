// index.js
import "./style.css";
import { createTask } from "./modules/createTask";
import { createProject } from "./modules/createProject";

const projects = [];
let activeProject = null;

const form = document.getElementById("projectForm");
const input = document.getElementById("projectInput");
const projectList = document.getElementById("projectList");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const date = document.getElementById('dateInput')
const priority = document.getElementById('priority')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const projectName = input.value.trim();
  if (!projectName) return;

  const newProject = createProject(projectName);
  projects.push(newProject);
  activeProject = newProject;
  input.value = "";

  saveToStorage();
  displayProjects();
  displayTasks();
});

function displayProjects() {
  projectList.innerHTML = "";
  projects.forEach((project) => {
    const div = document.createElement("div");
    div.textContent = project.name;
    div.classList.add("project-item");

    if (project === activeProject) {
        div.classList.add("active");
    }

    div.addEventListener("click", () => {
      activeProject = project;
      displayProjects();
      displayTasks();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑";
    delBtn.classList.add("delete-btn");
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const index = projects.indexOf(project);
      if (index !== -1) {
        projects.splice(index, 1);
        if (activeProject === project) {
            return activeProject = null;
        }
        saveToStorage();
        displayProjects();
        displayTasks();
      }
    });

    div.appendChild(delBtn);
    projectList.appendChild(div);
  });
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!activeProject) return alert("Please select a project first");
  const taskTitle = taskInput.value.trim();
  const taskDate = date.value
  const taskPriority = priority.value
  console.log(taskPriority);
  
  if (!taskTitle && !taskDate && !taskPriority) return;

  const newTask = createTask(taskTitle, taskDate, taskPriority);
  newTask.completed = false;
  activeProject.tasks.push(newTask);
  taskInput.value = "";
  saveToStorage();
  displayTasks();
});

function displayTasks() {
  taskList.innerHTML = "";
  if (!activeProject) {
    taskList.textContent = "Select a project to see tasks";
    return;
  }

  activeProject.tasks.forEach((task) => {
    const div = document.createElement("div");
    div.classList.add("task-item");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = task.completed;
    check.classList.add("task-checkbox");

    const span = document.createElement("span");
    span.textContent = task.title;
    if (task.completed) span.style.textDecorationLine = "line-through";

    check.addEventListener("change", () => {
      task.completed = check.checked;
      saveToStorage();
      displayTasks();
    });

    const priorityEle = document.createElement("h3")
    priorityEle.classList.add('priority')
    priorityEle.textContent = task.priority;

    if(task.priority == "Medium") div.style.borderLeft = "10px solid yellow"
    if(task.priority == "Low") div.style.borderLeft = "10px solid Green"
    if(task.priority == "High") div.style.borderLeft = "10px solid Red"

    const date = document.createElement('p')
    date.classList.add('date')
    date.textContent = task.date

    const btn = document.createElement("button");
    btn.innerText = "🗑";
    btn.classList.add("delete-btn");
    btn.addEventListener("click", () => {
      const index = activeProject.tasks.indexOf(task);
      if (index !== -1) {
        activeProject.tasks.splice(index, 1);
        saveToStorage();
        displayTasks();
      }
    });

    div.append(check, span, priorityEle,date,btn);
    taskList.appendChild(div);
  });
}

function saveToStorage() {
  localStorage.setItem("todoData", JSON.stringify(projects));
}

function loadFromStorage() {
  const saved = JSON.parse(localStorage.getItem("todoData"));
  if (saved) {
    saved.forEach((proj) => {
      const restored = createProject(proj.name);
      restored.tasks = proj.tasks || [];
      projects.push(restored);
    });
    activeProject = projects[0];
    displayProjects();
    displayTasks();
  }
}

loadFromStorage();
