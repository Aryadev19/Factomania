const emojis = [
  "💡",
  "😲",
  "🤔",
  "🤨",
  "😶",
  "🤯",
  "😮",
  "😯",
  "😦",
  "😧",
  "😱",
  "👀",
  "🤷",
  "🕵️",
];
const limit = 1;
const apiKey = "fKxhwOLhXSWa+bu6Xl9Xkg==bRtijMi90pZ3BAu3";

//api request
const facts = async () => {
  const url = await fetch(
    "https://api.api-ninjas.com/v1/facts?limit=" + limit,
    { headers: { "X-Api-Key": apiKey } }
  );
  const data = await url.json();
  getFacts(data);
};

//getting data from API
function getFacts(data) {
  const fact = data[0].fact;
  const para = document.querySelector(".facts");
  para.textContent = '"' + fact + '"';
}

//generating random Emoji from array
function randomEmoji() {
  const randomNumber = Math.round(Math.random() * 14);
  const emoji = emojis[randomNumber];
  const heading = document.querySelector("h1");
  heading.textContent = emoji;
  const p = document.querySelector(".facts");
  p.textContent = "Wait a sec!";
}
