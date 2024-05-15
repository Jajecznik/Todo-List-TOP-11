import { defaultProjectsNames, customProjects, activeProject, loadTasksOfProject, loadAllTasks, loadAllTasksByPriority, deleteProject, changeProjectName } from "../logic/functions";
import { addNewTaskHandler, taskContainerButton, appendTaskToDom } from './tasks-container';

// add default projects to navbar
const addDefaultProjectsToDom = () => {
    const customProjectsContainer = document.querySelector('.default-projects');

    defaultProjectsNames.forEach(name => {
        const project = document.createElement('p');

        project.setAttribute('id', name.toLowerCase().replace(/\s+/g, '-'));
        project.classList.add('project');

        const text = document.createElement('span');
        text.classList.add('project-text');
        text.innerText = name;
        project.appendChild(text);

        project.addEventListener('click', () => {
            handleDefaultProjectsClick(name);
        });
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

        const text = document.createElement('span');
        text.classList.add('project-text');
        text.innerText = p.name;
        project.appendChild(text);

        createEditDeleteButtons(project, "project");
        project.addEventListener('click', () => {
            handleClickOnProject(p.name, project);
        });
        customProjectsContainer.appendChild(project);
    });
};

// append custom project to navbar
const appendCustomProjectToDom = (value) => {
    const customProjectsContainer = document.querySelector('.custom-projects');
    const project = document.createElement('p');

    project.classList.add('project');
    project.setAttribute('data-project-id', value.id);

    const text = document.createElement('span');
    text.classList.add('project-text');
    text.innerText = value.name;
    project.appendChild(text);

    createEditDeleteButtons(project, "project");
    project.addEventListener('click', () => {
        handleClickOnProject(value.name, project);
    });
    customProjectsContainer.appendChild(project);
};

// handle click on project
function handleClickOnProject(pName, project) {
    const projectName = document.querySelector('.project-name');
    projectName.innerText = pName;
    const projectId = project.getAttribute('data-project-id');
    activeProject = projectId;

    if (!document.getElementById('new-task-button')) taskContainerButton();
    const tContent = document.querySelector('.tasks-content');
    if (tContent) tContent.remove();

    const container = document.querySelector('.tasks-container');
    const tasksContent = document.createElement('div');
    tasksContent.classList.add('tasks-content');
    container.appendChild(tasksContent);
    loadTasksOfProject();
}

// removes add new task button
function handleDefaultProjectsClick(name) {
    const button = document.getElementById('new-task-button');
    const projectName = document.querySelector('.project-name');
    projectName.innerText = name;

    if (button) {
        button.removeEventListener('click', addNewTaskHandler);
        button.remove();
    }

    switch (name) {
        case "All":
            activeProject = 'all';
            loadAllTasks();
            break;
        case "High priority":
            activeProject = 'high';
            loadAllTasksByPriority("high");
            break;
        case "Medium priority":
            activeProject = 'medium';
            loadAllTasksByPriority("medium");
            break;
        case "Low priority":
            activeProject = 'low';
            loadAllTasksByPriority("low");
            break;
        default:
            break;
    }
}

// create edit and delete buttons
function createEditDeleteButtons(project, type) {
    const buttonsContainer = document.createElement('span');
    buttonsContainer.classList.add('buttons');

    const editBtn = document.createElement('span');
    editBtn.classList.add('material-symbols-outlined');
    editBtn.innerText = "edit";

    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('material-symbols-outlined');
    deleteBtn.innerText = "delete";

    if (type === "project") {
        editBtn.addEventListener('click', () => {
            editProjectName(project, editBtn);
        });

        deleteBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            removeProject(project);
        });
    } else if (type === "task") {
        console.log("XD");
    }

    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(deleteBtn);
    project.appendChild(buttonsContainer);
}

// render all tasks of project
const renderTasksOfProject = (tasks) => {
    const tContent = document.querySelector('.tasks-content');
    if (tContent) tContent.remove();

    const container = document.querySelector('.tasks-container');
    const tasksContent = document.createElement('div');
    tasksContent.classList.add('tasks-content');

    container.appendChild(tasksContent);

    tasks.forEach(task => {
        appendTaskToDom(task);
    });
};

// change project name
function editProjectName(project, editBtn) {
    const projectID = project.getAttribute("data-project-id");
    const text = project.querySelector('.project-text');

    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('id', 'change-project-name-input');
    newInput.setAttribute('value', text.innerText);

    editBtn.style.display = "none";
    text.parentNode.insertBefore(newInput, text.nextSibling);
    text.style.display = "none";

    const doneIcon = document.createElement('span');
    doneIcon.classList.add('material-symbols-outlined', 'confirm');
    doneIcon.innerText = "done";
    doneIcon.addEventListener('click', () => {
        const inputValue = newInput.value.replace(/\s+/g, ' ').trim();
        const projectNameExist = customProjects.filter(project => project.name.toLowerCase() === inputValue.toLowerCase());
        const infoMsg = document.querySelector('.project-info-message');

        if (inputValue === "") {
            if (infoMsg) {
                infoMsg.innerText = "Project name cannot be empty!";
            } else {
                const infoMsg = document.createElement('p');
                infoMsg.classList.add('project-info-message');
                infoMsg.innerText = "Project name cannot be empty!";
                project.parentNode.insertBefore(infoMsg, project.nextSibling);
            }
        } else if (projectNameExist.length > 0) {
            if (infoMsg) {
                infoMsg.innerText = "A project with this name already exists!";
            } else {
                const infoMsg = document.createElement('p');
                infoMsg.classList.add('project-info-message');
                infoMsg.innerText = "A project with this name already exists!";
                project.parentNode.insertBefore(infoMsg, project.nextSibling);
            }
        } else {
            if (infoMsg) infoMsg.remove();
            confirmChangeProjectNameClickHandler(projectID, newInput, editBtn, text, doneIcon, inputValue);
        }
    });
    newInput.parentNode.insertBefore(doneIcon, newInput.nextSibling);
}

// confirm changing name of project
function confirmChangeProjectNameClickHandler(projectID, newInput, editBtn, text, doneIcon, newName) {
    changeProjectName(projectID, newName);
    newInput.remove();
    doneIcon.removeEventListener('click', confirmChangeProjectNameClickHandler);
    doneIcon.remove();

    editBtn.style.display = "block";
    text.style.display = "block";
    text.innerText = newName;
}

// removes project with all tasks
function removeProject(project) {
    const projectID = project.getAttribute("data-project-id");
    deleteProject(projectID);
    project.remove();
    handleDefaultProjectsClick("All");
}

export { addDefaultProjectsToDom, addCustomProjectsToDom, appendCustomProjectToDom, renderTasksOfProject };