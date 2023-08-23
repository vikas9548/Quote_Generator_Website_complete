const Quote = document.getElementById("Quote");
const author = document.getElementById("author");
const url = "https://api.quotable.io/random";

async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();

  Quote.innerHTML = data.content;
  author.innerHTML = data.author;

}

getquote(url);

function tweet(){
  window.open("https://twitter.com/intent/tweet?text=" + Quote.innerHTML + "---by" + author.innerHTML, "tweet window", "width=600, height=300");
}

