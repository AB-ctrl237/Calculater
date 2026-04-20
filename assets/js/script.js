document.addEventListener("DOMContentLoaded", function () {

  const section = document.querySelector(".Images");
  const images = document.querySelectorAll(".Image img");

  images.forEach(function (image) {
    image.addEventListener("click", function (e) {
      const imgSrc = e.target.src;
      section.style.backgroundImage = `url(${imgSrc})`;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const button = document.querySelectorAll(".btn");

  button.forEach(function (button) {
    button.addEventListener("click", function () {
      const value = button.innerHTML;

      if (value === "AC") {
        display.value = "";
        return;
      }
      if (value === "DEL") {
        display.value = display.value.slice(0, -1);
        return;
      }
      if (value === "AC") {
        display.value = display.value.slice(0, -1);
        return;
      }

      if (value === "=") {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Error";
        }
        return;
      }

      if (value === "x") {
        display.value += "*";
        return;
      }

      if (value === "÷") {
        display.value += "/";
        return;
      }

      if (value === "-") {
        display.value += "-";
        return;
      }

      display.value += value;
    });
  });
});