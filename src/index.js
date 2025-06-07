function displayPoem(response) {
  new Typewriter("#poem-display-position", {
    strings: `${response.data.answer}❤️❤️❤️`,
    autoStart: true,
    cursor: "!",
    delay: 100,
  });
}

function generatepoem(event) {
  event.preventDefault();
  let topic = document.querySelector("#form-input");
  let prompt = `write a poem about ${topic.value} `;
  let context = `Act like a romantic poem writer and write a short and captivating romantic  poem about ${topic.value}. make sure to listen to the ${topic.value} by writing the poem in the desired language.Please ensure the poem is not more than four sentences and display your response in  format <p></p> .Please make sure each sentence is displayed on a single line using format </br> .Always sign the poem with " Signed:A woman helped by GOD" in html format <footer></footer>`;
  let api_key = "da7a1b3d460dbtbf7b304o1bb99604f1";
  let api_url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${api_key}`;
  let poemElement = document.querySelector("#poem-display-position");
  poemElement.classList.remove("hidden");

  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${topic.value}</div>`;

  axios.get(api_url).then(displayPoem);
}
let formElement = document.querySelector("#form-element");
formElement.addEventListener("submit", generatepoem);
