$(document).ready(function() {
     $.ajax({
         url: "http://quotes.stormconsultancy.co.uk/random.json"

     }).then(function(data) {
         $('.qod-quote').append(data.quote);
         $('.qod-author').append(data.author);

     });
 });
