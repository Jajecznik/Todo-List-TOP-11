import { v4 as uuidv4 } from 'uuid';
import { Project } from './classes';
import { appendCustomProjectToDom } from '../ui/dom-manipulation';

let customProjects = [];
let activeProject = null;

const createCustomProject = (value) => {
    const id = uuidv4();
    const project = new Project(id, value);
    customProjects.push(project);

    appendCustomProjectToDom(project);
};

const addTaskToProject = (task) => {
    const currentProject = customProjects.find(project => project.id === activeProject);

    if (currentProject) currentProject.addTask(task);
};

export { customProjects, activeProject, createCustomProject, addTaskToProject };