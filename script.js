const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "Don't let yesterday take up too much of today.",
    "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    "It's not whether you get knocked down, it's whether you get up.",
    "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    "People who are crazy enough to think they can change the world, are the ones who do."
];

const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteButton = document.getElementById('newQuoteButton');

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

// Add event listener to the button
newQuoteButton.addEventListener('click', displayRandomQuote);
