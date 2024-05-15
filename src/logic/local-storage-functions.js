import { Project, Task } from "./classes";
import { customProjects } from "./functions";

const addNewProject = (project) => {
    let customProjects = JSON.parse(window.localStorage.getItem("customProjects")) || [];
    customProjects.push(project);
    window.localStorage.setItem("customProjects", JSON.stringify(customProjects));
};

const addTasksStorage = (projectId) => {
    let customTasks = JSON.parse(window.localStorage.getItem("customTasks")) || {};

    if (!customTasks[projectId]) {
        customTasks[projectId] = [];
        window.localStorage.setItem("customTasks", JSON.stringify(customTasks));
    }
};

const addNewTask = (projectId, task) => {
    let customTasks = JSON.parse(window.localStorage.getItem("customTasks")) || {};

    if (customTasks[projectId]) {
        customTasks[projectId].push(task);
        window.localStorage.setItem("customTasks", JSON.stringify(customTasks));
    }
};

const mergeProjectsAndTasks = () => {
    const p = getAllProjectsFromStorage();
    const t = getAllTasksFromStorage();

    let projects = [];
    let tasks = {};

    p.forEach(project => {
        const newProject = new Project(project.id, project.name);
        projects.push(newProject);

        tasks[project.id] = [];
        t[project.id].forEach(task => {
            const newTask = new Task(task.id, task.title, task.description, task.dueDate, task.priority);
            tasks[project.id].push(newTask);
        });
    });

    projects.forEach(project => {
        tasks[project.id].forEach(task => {
            project.addTask(task);
        });

        customProjects.push(project);
    });
};

const deleteProjectFromStorage = (projectId) => {
    let projects = JSON.parse(window.localStorage.getItem("customProjects"));
    const updatedProjects = projects.filter(project => project.id !== projectId);
    window.localStorage.setItem("customProjects", JSON.stringify(updatedProjects));
};

const deleteAllTasksFromStorage = (projectId) => {
    let tasks = JSON.parse(window.localStorage.getItem("customTasks"));
    delete tasks[projectId];
    window.localStorage.setItem("customTasks", JSON.stringify(tasks));
};

const deleteTaskFromStorage = (taskId) => {
    let tasks = JSON.parse(window.localStorage.getItem("customTasks"));

    for (let projectId in tasks) {
        if (tasks.hasOwnProperty(projectId)) {
            let projectTasks = tasks[projectId];
            let updatedTasks = projectTasks.filter(task => task.id !== taskId);

            if (tasks.length !== updatedTasks.length) {
                tasks[projectId] = updatedTasks;
                window.localStorage.setItem("customTasks", JSON.stringify(tasks));
                return;
            }
        }
    }
};

const changeProjectNameInStorage = (projectId, projectName) => {
    let projects = JSON.parse(window.localStorage.getItem("customProjects"));

    const projectIndex = projects.findIndex(project => project.id === projectId);
    projects[projectIndex].name = projectName;
    window.localStorage.setItem("customProjects", JSON.stringify(projects));
};

const changeTaskValuesInStorage = (taskId, title, description, dueDate, priority) => {
    let tasks = JSON.parse(window.localStorage.getItem("customTasks"));

    for (let projectId in tasks) {
        if (tasks.hasOwnProperty(projectId)) {
            let projectTasks = tasks[projectId];
            let taskIndex = projectTasks.findIndex(task => task.id === taskId);

            if (taskIndex !== -1) {
                projectTasks[taskIndex].title = title;
                projectTasks[taskIndex].description = description;
                projectTasks[taskIndex].dueDate = dueDate;
                projectTasks[taskIndex].priority = priority;
                window.localStorage.setItem("customTasks", JSON.stringify(tasks));
                return;
            }
        }
    }
};

function getAllProjectsFromStorage() {
    let projects = JSON.parse(window.localStorage.getItem("customProjects")) || [];
    return projects;
}

function getAllTasksFromStorage() {
    let tasks = JSON.parse(window.localStorage.getItem("customTasks")) || {};
    return tasks;
}

export { addNewProject, addTasksStorage, addNewTask, mergeProjectsAndTasks, deleteProjectFromStorage, deleteAllTasksFromStorage, deleteTaskFromStorage, changeProjectNameInStorage, changeTaskValuesInStorage };