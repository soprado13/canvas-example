let canvas;
let context;

window.onload = function () {
  canvas = document.getElementById('signature');
  context = canvas.getContext('2d');
  isDrawing = false

  canvas.onmousedown = startDrawing;
  canvas.onmouseup = stopDrawing;
  canvas.onmouseout = stopDrawing;
  canvas.onmousemove = draw;
}
function startDrawing(e) {
  isDrawing = true;
  context.beginPath();
  context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}
function draw(e) {
  console.log(context);
  
  if (isDrawing == true) {
    let x = e.pageX - canvas.offsetLeft;
    let y = e.pageY - canvas.offsetTop;
    context.lineTo(x, y);
    context.stroke();
  }
}
function stopDrawing() {
  isDrawing = false;
}
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
function saveCanvas() {
  let imageCopy = document.getElementById('savedImageCopy');
  imageCopy.src = canvas.toDataURL();
  let imageContainer = document.getElementById('savedCopyContainer');
  imageContainer.style.display = 'block';
}
