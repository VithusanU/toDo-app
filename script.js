// Select elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Function to add a task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Prevent empty tasks

    // Create task element
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">❌</button>
    `;

    // Add task to list
    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear input field

    // Add event listener to delete button
    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        taskItem.remove();
    });

    // Mark task as completed when clicked
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });
});
