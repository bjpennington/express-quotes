console.log('js');

$(readyNow);

function readyNow() {
    console.log('jq');
    $.ajax({
        url: '/quotes',
        method: 'GET'
    }).done(showQuotes).fail(function (errRes) {
        alert('Request failed. Error: ' + errRes);
    })
}

function showQuotes(response) {
    console.log(response);
}