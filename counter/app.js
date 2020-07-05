// initial value of count
let count = 0;

const counter = document.querySelector("#counter");

// selects all buttons with the btn class
const btns = document.querySelectorAll(".btn");

// traversing through each of the button with the btn class
btns.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    const classList = event.currentTarget.classList;
    if (classList.contains("dec")) {
      count--;
    } else if (classList.contains("inc")) {
      count++;
    } else if (classList.contains("reset")) {
      count = 0;
    }
    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }
    counter.textContent = count;
  })
);
