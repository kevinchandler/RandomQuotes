$(document).ready(function() {
     $.ajax({
         url: "https://cors-everywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json"

     }).then(function(data) {
         $('.qod-quote').append(data.quote);
         $('.qod-author').append(data.author);

     });
 });
