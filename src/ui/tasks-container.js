import { deleteTaskFromProject } from "../logic/functions";
import { editTaskModal, modalBackground, newTaskModal } from "./new-task-modal";

// header and tasks container
const tasksContainer = () => {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('tasks-container');

    const pageTitle = document.querySelector('.page-title');
    const height = pageTitle.offsetHeight;

    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('add-task-container');
    addTaskContainer.style.height = `${height + 1}px`;

    const projectName = document.createElement('p');
    projectName.classList.add('project-name');
    projectName.innerText = "All";
    addTaskContainer.appendChild(projectName);
    container.appendChild(addTaskContainer);

    content.appendChild(container);
};

// add new task button
const taskContainerButton = () => {
    const container = document.querySelector('.add-task-container');
    const addTaskBtn = document.createElement('button');

    addTaskBtn.setAttribute('id', 'new-task-button');
    addTaskBtn.innerText = "Add task";
    addTaskBtn.addEventListener('click', addNewTaskHandler);
    container.appendChild(addTaskBtn);
};

// handle click on new task button
const addNewTaskHandler = () => {
    document.body.appendChild(modalBackground());
    document.body.appendChild(newTaskModal());
};

// append new task to tasks container
const appendTaskToDom = (task) => {
    const tasksContent = document.querySelector('.tasks-content');
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task');
    taskContainer.setAttribute('data-task-id', task.id)

    const taskTitle = document.createElement('p');
    taskTitle.classList.add('title-info');
    taskTitle.innerText = task.title;

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('description-info');
    taskDescription.innerText = task.description;

    const taskDueDateTitle = document.createElement('p');
    taskDueDateTitle.classList.add('task-due-date-title', 'hidden');
    taskDueDateTitle.innerText = "Due date";

    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('due-date-info', 'hidden');
    taskDueDate.innerText = task.dueDate;

    const taskPriorityTitle = document.createElement('p');
    taskPriorityTitle.classList.add('task-priority-title', 'hidden');
    taskPriorityTitle.innerText = "Priority";

    const taskPriority = document.createElement('p');
    taskPriority.classList.add('priority-info', 'hidden');
    taskPriority.innerText = task.priority;

    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskDueDateTitle);
    taskContainer.appendChild(taskDueDate);
    taskContainer.appendChild(taskPriorityTitle);
    taskContainer.appendChild(taskPriority);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');

    const editBtn = document.createElement('span');
    editBtn.classList.add('material-symbols-outlined');
    editBtn.innerText = "edit";
    editBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        editTaskHandler(task.id);
    });

    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('material-symbols-outlined');
    deleteBtn.innerText = "delete";
    deleteBtn.addEventListener('click', () => {
        deleteTaskHandler(task.id);
    });

    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(deleteBtn);
    taskContainer.appendChild(buttonsContainer);

    taskContainer.addEventListener('click', () => {
        taskClickHandler(taskDueDateTitle, taskDueDate, taskPriorityTitle, taskPriority);
    });

    tasksContent.appendChild(taskContainer);
};

// expand / hide additional info of task
function taskClickHandler(taskDueDateTitle, taskDueDate, taskPriorityTitle, taskPriority) {
    if (taskDueDate.classList.contains('hidden') || taskPriority.classList.contains('hidden')) {
        taskDueDateTitle.classList.remove('hidden');
        taskDueDate.classList.remove('hidden');
        taskPriorityTitle.classList.remove('hidden');
        taskPriority.classList.remove('hidden');
    } else {
        taskDueDateTitle.classList.add('hidden');
        taskDueDate.classList.add('hidden');
        taskPriorityTitle.classList.add('hidden');
        taskPriority.classList.add('hidden');
    }
}

// click on edit task button
function editTaskHandler(taskId) {
    document.body.appendChild(modalBackground());
    document.body.appendChild(editTaskModal(taskId));
}

// click on delete task button 
function deleteTaskHandler(taskId) {
    deleteTaskFromProject(taskId);
}

export { tasksContainer, taskContainerButton, addNewTaskHandler, appendTaskToDom };