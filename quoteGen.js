$(document).ready(function() {

  var currentQuote = '';
  var currentAuthor = '';

  function getQuote() {
    $.ajax({
      headers: {
        "X-Mashape-Key":      "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success: function(response) {
        var r = JSON.parse(response);
        console.log(r);
        currentQuote = r.quote;
        currentAuthor = r.author;
        $('#text').text(r.quote);
        $('#author').html(r.author);
      }
    });
  }

  getQuote();
  console.log("Yoo", currentQuote, currentAuthor);

});
