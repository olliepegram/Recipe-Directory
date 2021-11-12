const quotes = [];

const fetchQuotes = async () => {
    const res = await fetch('https://seinfeld-quotes.herokuapp.com/quotes');
    const data = await res.json();
    if (quotes) quotes.push(data.quotes);
};

fetchQuotes();

window.setTimeout(() => {
    quotes.forEach((q, i) => {
        console.log(q[i]);
        // q.forEach((j) => {
        //     document.querySelector('body').innerHTML = `<p>${j.quote}</p>`;
        // });
    });
}, 2000);
