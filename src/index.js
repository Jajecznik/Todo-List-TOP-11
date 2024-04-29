import './styles/styles.css';
import { navbarComponent } from './ui/navbar';
import { tasksContainer } from './ui/tasks-container';
import { addDefaultProjectsToDom, addCustomProjectsToDom } from './ui/dom-manipulation';

navbarComponent();
tasksContainer();
addDefaultProjectsToDom();
addCustomProjectsToDom();
