const display = document.getElementById("display");
const buttons = document.querySelectorAll("input[type='button']");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.value == "AC") {
      display.value = "";
    } else if (button.value == "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (button.value == "=") {
      display.value = eval(display.value);
    } else {
      display.value += button.value;
      // Add the clicked button's value
    }
  });
});
