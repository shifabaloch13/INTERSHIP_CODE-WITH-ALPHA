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

    // Handle number or decimal input
    if (!action) {
      if (value === "." && current.includes(".")) return; // Prevent multiple decimals
      current += value;
    }

    // Handle actions
    else if (action === "clear") {
      // Clear the display and reset values
      current = "";
      previous = "";
      operator = null;
    } else if (action === "delete") {
      // Delete the last character
      current = current.slice(0, -1);
    } else if (action === "=") {
      // Perform the calculation when '=' is clicked
      if (operator && previous !== "" && current !== "") {
        current = eval(`${previous} ${operator} ${current}`).toString();
        operator = null;
        previous = "";
      }
    } else {
      // Handle operators (+, -, *, /)
      if (current === "") return; // Prevent operator input without a number
      if (previous !== "" && operator !== null) {
        current = eval(`${previous} ${operator} ${current}`).toString();
      }
      operator = action; // Store the operator
      previous = current; // Store the current value as the previous value
      current = ""; // Reset current for the next number
    }

    updateDisplay(); // Update the display after each button press
  });
});

updateDisplay(); // Initialize display when page loads
