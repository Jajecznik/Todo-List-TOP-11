import { modalBackground, newTaskModal } from "./new-task-modal";

const tasksContainer = () => {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('tasks-container');

    const pageTitle = document.querySelector('.page-title');
    const height = pageTitle.offsetHeight;

    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('add-task-container');
    addTaskContainer.style.height = `${height + 1}px`;

    container.appendChild(addTaskContainer);
    content.appendChild(container);
};

const taskContainerButton = () => {
    const container = document.querySelector('.add-task-container');
    const addTaskBtn = document.createElement('button');

    addTaskBtn.setAttribute('id', 'new-task-button');
    addTaskBtn.innerText = "Add task";
    addTaskBtn.addEventListener('click', addNewTaskHandler);
    container.appendChild(addTaskBtn);
};

const addNewTaskHandler = () => {
    document.body.appendChild(modalBackground());
    document.body.appendChild(newTaskModal());
};

export { tasksContainer, taskContainerButton, addNewTaskHandler };