document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', submitTask);
  

  
  function submitTask(event) {
    const taskList = document.getElementById('tasks');
    const task = document.createElement('li');
    const taskText = document.getElementById('new-task-description').value;
    
    task.innerText = taskText;
    taskList.appendChild(task);

    event.preventDefault();
  }
});
