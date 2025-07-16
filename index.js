let redBtn = document.getElementById("r-btn");
let blueBtn = document.getElementById("b-btn");
let greenBtn = document.getElementById("g-btn");
let randomBtn = document.getElementById("random-btn");

const body = document.querySelector("body");

redBtn.onclick = () => {
  body.style.backgroundColor = "red";
};

blueBtn.onclick = () => {
  body.style.backgroundColor = "blue";
};

greenBtn.onclick = () => {
  body.style.backgroundColor = "green";
};

randomBtn.onclick = () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};
