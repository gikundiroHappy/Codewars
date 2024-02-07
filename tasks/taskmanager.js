// Project: Task Manager
// Description:
// Create a task manager application where users can add, remove, and mark tasks as completed.
// Features:
// Add tasks to the task list.
// Remove tasks from the task list.
// Mark tasks as completed.
// Display all tasks.
// Sort tasks alphabetically.
// Display the number of incomplete tasks.
const task = [];

function addTask(taskText) {
  task.push({ nameOfTask: taskText, completed: false });
}

function removeTask(index) {
  return task.splice(index, 1);
}

function markedTask(index) {
  task[index].completed = true;
}
function sortTask() {
  return task.sort((a, b) => a.nameOfTask.localeCompare(b.nameOfTask));
}

function IncompleteTask() {
  const result = task.filter((item) => item.completed === false);
  return result.length;
}

addTask("Cleaning");
addTask("Cooking");
addTask("washing");
addTask("Eat");

markedTask(1);
sortTask();
IncompleteTask();
console.log(task);
