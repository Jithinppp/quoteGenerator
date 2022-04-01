const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const button = document.getElementById("button");

//get quote from api

let apiQuotes = [];
let singleQuote = [];
function newQuote() {
  const index = Math.floor(Math.random() * apiQuotes.length);
  singleQuote = apiQuotes[index];
  !singleQuote.author
    ? (quoteAuthor.textContent = "unknown")
    : (quoteAuthor.textContent = singleQuote.author);

  singleQuote.text.length > 120
    ? quoteText.classList.add("small-quote")
    : quoteText.classList.remove("small-quote");

  quoteText.textContent = singleQuote.text;
}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //error
    console.log(error);
  }
}

//on load execute the function

getQuotes();

//eventListners

button.addEventListener("click", newQuote);
