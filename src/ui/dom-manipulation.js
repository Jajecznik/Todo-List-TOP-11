import { activeProject, customProjects } from "../logic/functions";
import { addNewTaskHandler, taskContainerButton } from './tasks-container';

// add default projects to navbar
const addDefaultProjectsToDom = () => {
    const defaultProjectsNames = ['All', 'High priority', 'Medium priority', 'Low priority'];
    const customProjectsContainer = document.querySelector('.default-projects');

    defaultProjectsNames.forEach(name => {
        const project = document.createElement('p');

        project.classList.add('project');
        project.innerText = name;
        project.addEventListener('click', removeTasksContainer);
        customProjectsContainer.appendChild(project);
    });
};

// add custom projects to navbar
const addCustomProjectsToDom = () => {
    const customProjectsContainer = document.querySelector('.custom-projects');

    customProjects.forEach(p => {
        const project = document.createElement('p');

        project.classList.add('project');
        project.setAttribute('data-project-id', p.id);
        project.innerText = p.name;
        project.addEventListener('click', handleClickOnProject);
        customProjectsContainer.appendChild(project);
    });
};

// append custom project to navbar
const appendCustomProjectToDom = (value) => {
    const customProjectsContainer = document.querySelector('.custom-projects');
    const project = document.createElement('p');

    project.classList.add('project');
    project.setAttribute('data-project-id', value.id);
    project.innerText = value.name;
    project.addEventListener('click', handleClickOnProject);
    customProjectsContainer.appendChild(project);
};

// handle click on project
function handleClickOnProject() {
    const project = this;
    const projectId = project.getAttribute('data-project-id');
    activeProject = projectId;

    if (!document.getElementById('new-task-button')) taskContainerButton();
}

// removes add new task button
function removeTasksContainer() {
    const button = document.getElementById('new-task-button');

    if (button) {
        button.removeEventListener('click', addNewTaskHandler);
        button.remove();
        activeProject = null;
    }
}

export { addDefaultProjectsToDom, addCustomProjectsToDom, appendCustomProjectToDom };