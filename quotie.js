$('#container').load('http://google.com'); // SERIOUSLY!

$(document).ready(function() {
     $.ajax({
         url: GET http://quotes.stormconsultancy.co.uk/quotes/1.json?callback=my_method

     }).then(function(data) {
         $('.qod-quote').append(data.quote);
         $('.qod-author').append(data.author);

     });
 });
