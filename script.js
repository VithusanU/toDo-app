// Select elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const taskDate = document.getElementById("task-date");
const taskPriority = document.getElementById("task-priority");

// Function to add a task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const dueDate = taskDate.value;
    const priority = taskPriority.value;

    if (taskText === "") return; // Prevent empty tasks

    // Create task element
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
        <span>${taskText}<small style="color:yellow">(${dueDate})</small> (${priority.toUpperCase()})</span>
        <button class="delete-btn">❌</button>
    `;

    // Set priority color
    if (priority === "high") {
        taskItem.style.background = "rgba(255, 0, 0, 0.7)"; // Red for high priority
    } else if (priority === "medium") {
        taskItem.style.background = "rgba(255, 165, 0, 0.7)"; // Orange for medium priority
    } else {
        taskItem.style.background = "rgba(0, 255, 0, 0.7)"; // Green for low priority
    }

    // Add task to list
    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear input field
    taskDate.value = "";

    // Add event listener to delete button
    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        taskItem.remove();
    });

    // Mark task as completed when clicked
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });
});
