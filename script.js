function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const listItem = document.createElement("li");

  const date = new Date();
  const formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();

  listItem.innerHTML = `
    <div class="task-text">
      <strong>${taskText}</strong><br>
      <span class="date">${formattedDate}</span>
    </div>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;

  taskList.appendChild(listItem);
  taskInput.value = "";
}