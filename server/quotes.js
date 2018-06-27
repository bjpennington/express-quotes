let quotes = [];

class Quote {
    constructor(text, author) {
        this.text = text;
        this.author = author;
    }
}

function addQuote(text, author) {
    let newQuote = new Quote(text, author);
    quotes.push(newQuote);
}

addQuote('Ain\'t no party like a Liz Lemon party, \'cause a Liz Lemon party is MANDATORY.', 'Liz Lemon');
addQuote('Separate the whites and the colors? What are you, some kind of laundry racist?', 'Bucky Katt');
addQuote('Ya alright.', 'Tho Kieu');

module.exports = quotes;
