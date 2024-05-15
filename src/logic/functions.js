import { v4 as uuidv4 } from 'uuid';
import { Project } from './classes';
import { appendCustomProjectToDom, renderTasksOfProject } from '../ui/dom-manipulation';
import { appendTaskToDom } from '../ui/tasks-container';
import { addNewProject, addNewTask, addTasksStorage, changeProjectNameInStorage, changeTaskValuesInStorage, deleteAllTasksFromStorage, deleteProjectFromStorage, deleteTaskFromStorage } from './local-storage-functions';

const defaultProjectsNames = ['All', 'High priority', 'Medium priority', 'Low priority'];
let customProjects = [];
let activeProject = 'all';

// create new project
const createCustomProject = (value) => {
    const id = uuidv4();
    const project = new Project(id, value);
    customProjects.push(project);

    addNewProject(project);
    addTasksStorage(id);
    appendCustomProjectToDom(project);
};

// add task to project
const addTaskToProject = (task) => {
    const currentProject = customProjects.find(project => project.id === activeProject);

    if (currentProject) {
        currentProject.addTask(task);
        addNewTask(currentProject.id, task);
        appendTaskToDom(task, task.id);
    }
};

// load all tasks of project
const loadTasksOfProject = () => {
    const currentProject = customProjects.find(project => project.id === activeProject);
    if (currentProject) {
        const tasks = currentProject.getTasks();
        renderTasksOfProject(tasks);
    }
};

// load all tasks
const loadAllTasks = () => {
    let allTasks = [];

    customProjects.forEach(project => {
        allTasks.push(...project.getTasks());
    });

    renderTasksOfProject(allTasks);
};

// load all tasks of given priority
const loadAllTasksByPriority = (priority) => {
    let tasksWithCorrectPriority = [];

    customProjects.forEach(project => {
        const tasks = project.getTasks();
        tasksWithCorrectPriority.push(...tasks.filter(task => task.priority === priority));
    });

    renderTasksOfProject(tasksWithCorrectPriority);
};

// delete project of given id
const deleteProject = (id) => {
    customProjects = customProjects.filter(project => project.id !== id);
    activeProject = 'all';
    deleteProjectFromStorage(id);
    deleteAllTasksFromStorage(id);
};

// change project name
const changeProjectName = (projectID, inputValue) => {
    const index = customProjects.findIndex(project => project.id === projectID);

    if (index !== -1) customProjects[index].name = inputValue;
    changeProjectNameInStorage(projectID, inputValue);
};

// delete task from project
const deleteTaskFromProject = (taskId) => {
    if (activeProject === 'all' || activeProject === 'high' || activeProject === 'medium' || activeProject === 'low') {
        for (const project of customProjects) {
            const projectTasks = project.getTasks();
            const taskToDelete = projectTasks.find(task => task.id === taskId);

            if (taskToDelete) {
                project.deleteTask(taskId);
                if (activeProject === 'all') {
                    loadAllTasks();
                    break;
                } else {
                    loadAllTasksByPriority(activeProject);
                    break;
                }
            }
        }
    } else {
        const currentProject = customProjects.find(project => project.id === activeProject);
        if (currentProject) currentProject.deleteTask(taskId);
        renderTasksOfProject(currentProject.getTasks());
    }
    deleteTaskFromStorage(taskId);
};

const getTaskValues = (taskId) => {
    const task = customProjects.flatMap(project => project.getTasks())
        .find(task => task.id === taskId);
    if (task) return task;
};

const editTaskValues = (taskId, title, description, dueDate, priority) => {
    for (const project of customProjects) {
        const projectTasks = project.getTasks();
        const index = projectTasks.findIndex(task => task.id === taskId);

        if (index !== -1) {
            projectTasks[index].title = title;
            projectTasks[index].description = description;
            projectTasks[index].dueDate = dueDate;
            projectTasks[index].priority = priority;

            changeTaskValuesInStorage(taskId, title, description, dueDate, priority);
            break;
        }
    }

    if (activeProject === 'all') {
        loadAllTasks();
    } else if (activeProject === 'high' || activeProject === 'medium' || activeProject === 'low') {
        loadAllTasksByPriority(activeProject);
    } else {
        const currentProject = customProjects.find(project => project.id === activeProject);
        renderTasksOfProject(currentProject.getTasks());
    }
};

export { defaultProjectsNames, customProjects, activeProject, createCustomProject, addTaskToProject, loadTasksOfProject, loadAllTasks, loadAllTasksByPriority, deleteProject, changeProjectName, deleteTaskFromProject, getTaskValues, editTaskValues };