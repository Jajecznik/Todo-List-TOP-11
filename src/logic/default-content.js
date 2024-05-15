import { v4 as uuidv4 } from 'uuid';
import { Project, Task } from './classes';
import { addNewProject, addNewTask, addTasksStorage } from './local-storage-functions';

const defaultProjectAndTasks = () => {
    const id = uuidv4();
    const project = new Project(id, "Test project");

    if (!window.localStorage.getItem("customProjects") || JSON.parse(window.localStorage.getItem("customProjects")).length === 0) {
        window.localStorage.setItem("customProjects", JSON.stringify([]));
        window.localStorage.setItem("customTasks", JSON.stringify({}));

        // add project to local storage
        addNewProject(project);
        addTasksStorage(id);

        const tasks = [
            { id: uuidv4(), title: "Task 1", description: "Description 1", dueDate: "2024-05-11", priority: "high" },
            { id: uuidv4(), title: "Task 2", description: "Description 2", dueDate: "2024-05-12", priority: "medium" },
            { id: uuidv4(), title: "Task 3", description: "Description 3", dueDate: "2024-05-13", priority: "low" }
        ];

        tasks.forEach(task => {
            const newTask = new Task(task.id, task.title, task.description, task.dueDate, task.priority);
            project.addTask(newTask);

            // add task to local storage
            addNewTask(id, task);
        });
    }
};

export { defaultProjectAndTasks };