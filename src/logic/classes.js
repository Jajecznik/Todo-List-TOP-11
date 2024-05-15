class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;

        let tasks = [];

        this.addTask = (task) => {
            tasks.push(task);
        };

        this.deleteTask = (id) => {
            tasks = tasks.filter(task => task.id !== id);
        }

        this.getTasks = () => {
            return tasks;
        };
    }
}

class Task {
    constructor(id, title, description, dueDate, priority) {
        this.id = id
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export { Project, Task };