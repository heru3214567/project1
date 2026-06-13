const quotes = [
    {
        quote: "The Lord is my shepherd; I shall not want.",
        author: "Psalm 23:1"
    },
    {
        quote: "I can do all things through Christ who strengthens me.",
        author: "Philippians 4:13"
    },
    {
        quote: "For with God nothing shall be impossible.",
        author: "Luke 1:37"
    },
    {
        quote: "Trust in the Lord with all your heart and lean not on your own understanding.",
        author: "Proverbs 3:5"
    },
    {
        quote: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        author: "Joshua 1:9"
    },
    {
        quote: "God is our refuge and strength, an ever-present help in trouble.",
        author: "Psalm 46:1"
    },
    {
        quote: "Love is patient, love is kind.",
        author: "1 Corinthians 13:4"
    },
    {
        quote: "The Lord will fight for you; you need only to be still.",
        author: "Exodus 14:14"
    },
    {
        quote: "Ask and it will be given to you; seek and you will find.",
        author: "Matthew 7:7"
    },
    {
        quote: "With man this is impossible, but with God all things are possible.",
        author: "Matthew 19:26"
    }
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuote");

function getquote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[randomIndex].quote;
    author.innerHTML = quotes[randomIndex].author;
}

newQuoteBtn.addEventListener("click", getquote);


getquote();
