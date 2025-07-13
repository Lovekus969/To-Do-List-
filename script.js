function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement('li');

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.classList.add('delete-btn');

  // Add click event to delete the task
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  // Append delete button first (so it appears before the text)
  li.appendChild(deleteBtn);

  // Append the task text after the button
  li.appendChild(document.createTextNode(' ' + taskText));

  // Append the list item to the task list
  const taskList = document.getElementById('taskList');
  taskList.appendChild(li);

  // Clear input box
  taskInput.value = '';
}
// Enable audio on user interaction
window.addEventListener('click', () => {
  const audio = document.getElementById('bg-audio');
  audio.muted = false;
  audio.play();
});
