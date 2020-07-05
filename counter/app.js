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
    }
    if (classList.contains("inc")) {
      count++;
    }
    if (classList.contains("reset")) {
      count = 0;
    }
    counter.textContent = count;
  })
);
