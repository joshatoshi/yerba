let dragging = null;
let offsetX = 0, offsetY = 0;

function openWindow(id) {
  const windowElement = document.getElementById(id);
  const navElement = document.getElementById('navbar');

  // Set random position for the window
  const randomX = Math.max(Math.floor(Math.random() * ((window.innerWidth * 0.8) - windowElement.offsetWidth) ),windowElement.offsetWidth);
  const randomY = Math.max(Math.floor(Math.random() * ((window.innerHeight * 0.8) - windowElement.offsetHeight )),navbar.offsetHeight); 

  windowElement.style.left = `${randomX}px`;
  windowElement.style.top = `${randomY}px`;
  windowElement.style.display = 'block';



}

function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}

function playSound(type) {
  const sound = document.getElementById(type + 'Sound');
  sound.play();
}

function startDrag(event, id) {
  dragging = document.getElementById(id);
  offsetX = event.clientX - dragging.offsetLeft;
  offsetY = event.clientY - dragging.offsetTop;
  document.onmousemove = dragWindow;
  document.onmouseup = stopDrag;
}

function dragWindow(event) {
  if (!dragging) return;
  dragging.style.left = event.clientX - offsetX + 'px';
  dragging.style.top = event.clientY - offsetY + 'px';
}

function stopDrag() {
  dragging = null;
  document.onmousemove = null;
  document.onmouseup = null;
}
