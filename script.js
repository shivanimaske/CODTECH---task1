// script.js

// Select the elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');

    // Create a span to hold the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete');
    deleteBtn.onclick = () => removeTask(li);
    li.appendChild(deleteBtn);

    // Toggle completed status when the task is clicked
    taskSpan.onclick = () => toggleComplete(li);

    // Append the new task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Function to remove a task
function removeTask(taskItem) {
    taskList.removeChild(taskItem);
}

// Function to toggle the completed status of a task
function toggleComplete(taskItem) {
    taskItem.classList.toggle('completed');
}

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow pressing Enter key to add a task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
