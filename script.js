// Function to add a new task
function addTask() {
  // Step 1: Get input box value
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim(); // remove extra white spaces

  // Step 2: Prevent adding empty task
  if (taskText === '') {
    alert("Please enter a task.");
    return;
  }

  // Step 3: Create new <li> element
  const li = document.createElement('li');
  li.textContent = taskText;

  // Step 4: Append to the task list
  const taskList = document.getElementById('taskList');
  taskList.appendChild(li);

  // Step 5: Clear the input box
  taskInput.value = '';
}
 // Enable audio on user interaction
    window.addEventListener('click', () => {
      const audio = document.getElementById('bg-audio');
      audio.muted = false;
      audio.play();
    });
