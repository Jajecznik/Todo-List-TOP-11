import './styles/styles.css';
import navbarComponent from './modules/navbar';

const defaultProjectsCategories = ['All', 'High priority', 'Medium priority', 'Low priority'];
const customProjectsCategories = ['XD1', 'XDD2'];

navbarComponent();
createDefaultProjects();
createCustomProjects();

function createDefaultProjects() {
    const defaultProjectsContainer = document.querySelector('.default-projects');

    defaultProjectsCategories.forEach(category => {
        const project = document.createElement('p');
        project.classList.add('project');
        project.innerText = category;
        defaultProjectsContainer.appendChild(project);
    });
}

function createCustomProjects() {
    const customProjectsContainer = document.querySelector('.custom-projects');

    customProjectsCategories.forEach(category => {
        const project = document.createElement('p');
        project.classList.add('project');
        project.innerText = category;
        customProjectsContainer.appendChild(project);
    });
}
