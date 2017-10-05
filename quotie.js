var url = "https://cors-everywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json"
 var getQuote = function(data) {
  $(".qod-quote").text(data.quote);
  var quot = 'https://twitter.com/intent/tweet?text=' + data.quote + ' Author ' + data.author;
  if (data.author === '') {
    data.author = 'Unknown';
  }
  $(".qod-author").text(data.author);
  $(".twitter-share-button").attr("href", quot);
};
$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});
$("#quote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});
