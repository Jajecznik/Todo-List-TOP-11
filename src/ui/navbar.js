import { createCustomProject, customProjects } from "../logic/functions";

// create navbar element
const navbarComponent = () => {
    const content = document.getElementById('content');
    const navElement = document.createElement('nav');

    // page title
    const titleElement = document.createElement('p');
    titleElement.classList.add('page-title');
    titleElement.innerText = "Todo List";
    navElement.appendChild(titleElement);

    // default projects
    const defaultProjectsContainer = document.createElement('div');
    defaultProjectsContainer.classList.add('projects');
    defaultProjectsContainer.classList.add('default-projects');
    navElement.appendChild(defaultProjectsContainer);

    // create new project
    const newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('new-project');
    const newProjectButton = document.createElement('button');
    newProjectButton.setAttribute("id", "new-project-button");
    newProjectButton.innerText = "Add project";
    newProjectContainer.appendChild(newProjectButton);
    navElement.appendChild(newProjectContainer);

    // user's created projects
    const customProjectsContainer = document.createElement('div');
    customProjectsContainer.classList.add('projects');
    customProjectsContainer.classList.add('custom-projects');
    navElement.appendChild(customProjectsContainer);

    content.appendChild(navElement);

    newProjectButton.addEventListener('click', newProjectClickHandler);
};

// handle new project click
function newProjectClickHandler() {
    const projectsContainer = document.querySelector('.custom-projects');

    // new project name input
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'new-project-name');
    input.setAttribute('name', 'new-project-name');
    input.setAttribute('placeholder', 'new project name');
    projectsContainer.appendChild(input);

    // new project buttons container 
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('new-project-buttons');

    // new project submit button
    const submit = document.createElement('button');
    submit.setAttribute('id', 'add-new-project');
    submit.innerText = "Add";
    buttonsContainer.appendChild(submit);

    // new project cancel button
    const cancel = document.createElement('button');
    cancel.setAttribute('id', 'cancel-new-project');
    cancel.innerText = "Cancel";
    buttonsContainer.appendChild(cancel);

    projectsContainer.appendChild(buttonsContainer);

    submit.addEventListener('click', checkAndAddNewProject);
    cancel.addEventListener('click', cancelNewProject);

    const thisButton = this;
    thisButton.removeEventListener('click', newProjectClickHandler);
}

// add new project
function checkAndAddNewProject() {
    const input = document.getElementById('new-project-name');
    const inputValue = input.value.replace(/\s+/g, ' ').trim();
    const projectNameExist = customProjects.filter(project => project.name.toLowerCase() === inputValue.toLowerCase());

    if (inputValue === "") {
        const infoMsg = document.querySelector('.project-info-message');
        if (infoMsg) {
            infoMsg.innerText = "Project name cannot be empty!";
        } else {
            const infoMsg = document.createElement('p');
            infoMsg.classList.add('project-info-message');
            infoMsg.innerText = "Project name cannot be empty!";
            input.parentNode.insertBefore(infoMsg, input.nextElementSibling);
        }
    } else if (projectNameExist.length > 0) {
        const infoMsg = document.querySelector('.project-info-message');
        if (infoMsg) {
            infoMsg.innerText = "A project with this name already exists!";
        } else {
            const infoMsg = document.createElement('p');
            infoMsg.classList.add('project-info-message');
            infoMsg.innerText = "A project with this name already exists!";
            input.parentNode.insertBefore(infoMsg, input.nextElementSibling);
        }
    } else {
        createCustomProject(inputValue);
        cancelNewProject();
    }
}

// cancel creating new project 
function cancelNewProject() {
    const input = document.getElementById('new-project-name');
    const infoMsg = document.querySelector('.project-info-message');
    const buttons = document.querySelector('.new-project-buttons');
    const submit = document.getElementById('add-new-project');
    const cancel = document.getElementById('cancel-new-project');

    const newProjectBtn = document.getElementById('new-project-button');
    newProjectBtn.addEventListener('click', newProjectClickHandler);
    submit.removeEventListener('click', checkAndAddNewProject);
    cancel.removeEventListener('click', cancelNewProject);
    if (buttons) buttons.remove();
    if (infoMsg) infoMsg.remove();
    if (input) input.remove();
}

export { navbarComponent };