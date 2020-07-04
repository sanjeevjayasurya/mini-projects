const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const hexColor = document.querySelector(".hexColor");
const rgba = document.querySelector(".rgba");

btn.addEventListener("click", function () {
  randomHexColor = generateRandomHex();
  correspondingRGBA = generateRGBAFromHex(randomHexColor);
  document.body.style.backgroundColor = randomHexColor;
  hexColor.textContent = randomHexColor;
  rgba.textContent = correspondingRGBA;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hexArray.length);
}

function generateRandomHex() {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor = hexColor + hexArray[getRandomNumber()];
  }
  return hexColor;
}

function generateRGBAFromHex(hex) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return "(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)";
  }
  throw new Error("Bad Hex");
}
