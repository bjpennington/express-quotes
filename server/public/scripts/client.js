console.log('js');

$(readyNow);

function readyNow() {
    console.log('jq');
    $('#quoteBtn').on('click', addQuote);
    getQuotes();
}

function getQuotes() {
    $.ajax({
        url : '/quotes',
        method : 'GET'
    }).done(showQuotes).fail(function (errRes) {
        alert('Request failed. Error: ' + errRes);
    })
}

function showQuotes(response) {
    for(let i = 0; i < response.length; i++) {
        let quoteText = response[i].text;
        let quoteAuthor = response[i].author;
        let quoteString = `<li>\"${quoteText}\" — ${quoteAuthor}</li>`
        $('#quotesList').append(quoteString);
    }
}

function addQuote() {
    let quoteText = $('#quoteText').val();
    let quoteAuthor = $('#quoteAuthor').val();

    $.ajax({
        url : '/quotes',
        method : 'POST',
        data : {
            text : quoteText,
            author : quoteAuthor
        }
    }).done(function (response) {
        console.log(response);
    }).fail(function(errRes) {
        alert('Request failed. Error: ' + errRes);
    })

}