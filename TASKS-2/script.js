const display = document.getElementById("display");
let current = "";
let operator = null;
let previous = "";

function updateDisplay() {
  display.textContent = current || "0";
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      if (value === "." && current.includes(".")) return;
      current += value;
    } else if (action === "clear") {
      current = "";
      previous = "";
      operator = null;
    } else if (action === "delete") {
      current = current.slice(0, -1);
    } else if (action === "=") {
      if (operator && previous !== "" && current !== "") {
        current = eval(`${previous} ${operator} ${current}`).toString();
        operator = null;
        previous = "";
      }
    } else {
      if (current === "") return;
      if (previous !== "") {
        current = eval(`${previous} ${operator} ${current}`).toString();
      }
      operator = action;
      previous = current;
      current = "";
    }
    updateDisplay();
  });
});

updateDisplay();
