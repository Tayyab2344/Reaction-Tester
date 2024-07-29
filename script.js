let shape = document.querySelector(".shape");
let time = document.querySelector(".time");
let start = new Date().getTime();

function makeShape() {
  function getRandomColor() {
    let values = "012345679ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += values[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  shape.style.display = "block";
  start = new Date().getTime();
  let position = Math.random() * 100;
  let size = Math.random() * 300 + 100;
  shape.style.top = position + "%";
  shape.style.left = position + "%";
  shape.style.width = size + "px";
  shape.style.height = size + "px";
  shape.style.backgroundColor = getRandomColor();
  if (Math.random() > 0.5) {
    shape.style.borderRadius = "50%";
  }
  else if(Math.random() >1.5){
shape.style.borderRadius = '75%'
  }
   else {
    shape.style.borderRadius = "0%";
  }
}

function appearAfterDelay() {
  setTimeout(makeShape, Math.random() * 2000);
}
appearAfterDelay();

shape.onclick = function () {
  let end = new Date().getTime();
  let timeTaken = (end - start) / 1000;
  shape.style.display = "none";
  time.innerHTML = timeTaken + "s";
  appearAfterDelay();
};

function appearAfterDelay() {
  setTimeout(makeShape, Math.random() * 2000);
}
appearAfterDelay();

shape.onclick = function () {
  let end = new Date().getTime();
  let timeTaken = (end - start) / 1000;
  shape.style.display = "none";
  time.innerHTML = timeTaken + "s";
  appearAfterDelay();
};
