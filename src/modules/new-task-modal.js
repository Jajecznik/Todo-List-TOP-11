const newTaskModal = () => {
    const modalContainer = document.createElement('div');
    modalContainer.setAttribute('id', 'modal');
    modalContainer.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // header container
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header');

    // header
    const headerText = document.createElement('p');
    headerText.innerText = "Add new task";
    headerContainer.appendChild(headerText);

    // close button
    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('id', 'new-task-close');
    closeBtn.innerHTML = "&times;";
    headerContainer.appendChild(closeBtn);
    modalContent.appendChild(headerContainer);

    // form container
    const form = document.createElement('form');
    form.setAttribute('id', 'form');

    // title 
    const titleLabel = document.createElement('label');
    titleLabel.innerText = "Title";
    titleLabel.setAttribute('for', 'title');
    form.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    form.appendChild(titleInput);

    // description 
    const descriptionLabel = document.createElement('label');
    descriptionLabel.innerText = "Description";
    descriptionLabel.setAttribute('for', 'description');
    form.appendChild(descriptionLabel);

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('name', 'description');
    form.appendChild(descriptionInput);

    // due date 
    const dueDateLabel = document.createElement('label');
    dueDateLabel.innerText = "Due date";
    dueDateLabel.setAttribute('for', 'due-date');
    form.appendChild(dueDateLabel);

    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('id', 'due-date');
    dueDateInput.setAttribute('name', 'due-date');
    form.appendChild(dueDateInput);

    // priority
    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = "Priority";
    priorityLabel.setAttribute('for', 'priority');
    form.appendChild(priorityLabel);

    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('id', 'priority');
    prioritySelect.setAttribute('name', 'priority');

    const options = ['high', 'medium', 'low'];
    for (let i = 0; i < 3; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', options[i]);
        option.innerText = options[i].charAt(0).toUpperCase() + options[i].slice(1);
        prioritySelect.appendChild(option);
    }

    form.appendChild(prioritySelect);

    // submit
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'submit');
    submit.setAttribute('name', 'submit');
    submit.value = "Add task";
    form.appendChild(submit);

    modalContent.appendChild(form);
    modalContainer.appendChild(modalContent);
    closeBtn.addEventListener('click', closeBtnClickHandler);

    return modalContainer;
}

const modalBackground = () => {
    const background = document.createElement('div');
    background.setAttribute('id', 'modal-background');
    background.classList.add('modal-background');

    return background;
}

function closeBtnClickHandler() {
    const background = document.getElementById('modal-background');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('new-task-close');

    closeBtn.removeEventListener('click', closeBtnClickHandler);
    modal.remove();
    background.remove();
}

export { newTaskModal, modalBackground };