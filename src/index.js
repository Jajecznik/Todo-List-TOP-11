import './styles/styles.css';
import { defaultProjectAndTasks } from './logic/default-content';
import { loadAllTasks } from './logic/functions';
import { navbarComponent } from './ui/navbar';
import { tasksContainer } from './ui/tasks-container';
import { addDefaultProjectsToDom, addCustomProjectsToDom } from './ui/dom-manipulation';
import { mergeProjectsAndTasks } from './logic/local-storage-functions';

navbarComponent();
tasksContainer();
defaultProjectAndTasks();
mergeProjectsAndTasks();
addDefaultProjectsToDom();
addCustomProjectsToDom();
loadAllTasks();
