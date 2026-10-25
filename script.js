"use strict";

const tasks = [];
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const taskCount = document.querySelector("#task-count");
const formMessage = document.querySelector("#form-message");

// Rebuild the visible list from the in-memory task array.
function renderTasks() {
  taskList.replaceChildren();

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = "task-item";

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.dataset.taskId = task.id;
    deleteButton.setAttribute("aria-label", `Delete task: ${task.text}`);
    deleteButton.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M10 11v6m4-6v6M6 7l1 13h10l1-13M9 7V4h6v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    item.append(text, deleteButton);
    taskList.append(item);
  });

  emptyState.hidden = tasks.length > 0;
  taskList.hidden = tasks.length === 0;
  taskCount.textContent = `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;
}

// Add a trimmed task unless the input is empty or only whitespace.
function addTask() {
  const text = taskInput.value.trim();

  if (!text) {
    formMessage.textContent = "Please enter a task before adding it.";
    taskInput.focus();
    return;
  }

  tasks.push({ id: crypto.randomUUID(), text });
  taskInput.value = "";
  formMessage.textContent = "";
  renderTasks();
  taskInput.focus();
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask();
});

taskInput.addEventListener("input", () => {
  if (taskInput.value.trim()) {
    formMessage.textContent = "";
  }
});

// Handle all delete actions from the task-list container.
taskList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-button");
  if (!deleteButton || !taskList.contains(deleteButton)) {
    return;
  }

  const taskIndex = tasks.findIndex((task) => task.id === deleteButton.dataset.taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    renderTasks();
  }
});

renderTasks();
