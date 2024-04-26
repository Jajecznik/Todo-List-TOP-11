export default function navbarComponent() {
    const content = document.getElementById('content');
    const navElement = document.createElement('nav');

    // page title
    const titleElement = document.createElement('p');
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
    newProjectButton.setAttribute("id", "new-task-button");
    newProjectButton.innerText = "Add project";
    newProjectContainer.appendChild(newProjectButton);
    navElement.appendChild(newProjectContainer);

    // user's created projects
    const customProjectsContainer = document.createElement('div');
    customProjectsContainer.classList.add('projects');
    customProjectsContainer.classList.add('custom-projects');
    navElement.appendChild(customProjectsContainer);

    content.appendChild(navElement);

    newProjectButton.addEventListener('click', () => {
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
    });
}