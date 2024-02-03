function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let myParagraph = document.createElement("p");
  myParagraph.innerText = "Welcome Holberton!";
  document.body.appendChild(myParagraph);

  let spookyButton = document.createElement("button");
  spookyButton.innerText = "Spooky";
  spookyButton.onclick = spooky;
  document.body.appendChild(spookyButton);

  let darkModeButton = document.createElement("button");
  darkModeButton.innerText = "Dark mode";
  darkModeButton.onclick = darkMode;
  document.body.appendChild(darkModeButton);

  let screamModeButton = document.createElement("button");
  screamModeButton.innerText = "Scream mode";
  screamModeButton.onclick = screamMode;
  document.body.appendChild(screamModeButton);
}

function spookyMode() {
  changeMode(9, "bold", "uppercase", "pink", "green")();
}

function darkMode() {
  changeMode(12, "bold", "capitalize", "black", "white")();
}

function screamMode() {
  changeMode(12, "normal", "lowercase", "white", "black")();
}

main();
