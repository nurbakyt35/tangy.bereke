const quotes = [
  "Believe in yourself!",
  "You are stronger than you think.",
  "Every day is a new beginning.",
  "Push yourself, because no one else will.",
  "Dream big. Work hard. Stay focused."
];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}
