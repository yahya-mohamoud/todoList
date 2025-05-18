import { createProject } from "./createProject";

const project = [];
const activeProjects = null;

const form = document.getElementById('projectForm');
const input = document.getElementById('projectInput');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const projectName = input.ariaValueMax.trim();
    if(!projectName) return;

    const newProject = createProject(projectName)

    console.log(newProject);
    
} )