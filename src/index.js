function displayPoem(event) {
  event.preventDefault();
  new Typewriter("#poem-display-position", {
    strings: "This is a captivating poem .This is really captivating❤️❤️❤️",
    autoStart: true,
    cursor: "!",
    delay: 100,
  });
}
let formElement = document.querySelector("#form-element");
formElement.addEventListener("submit", displayPoem);
