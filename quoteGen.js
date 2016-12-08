// **TO DO**
// - A link to the quote author on Wikipedia is dynamically generated with every quote.
// - With the tweet feature in mind, I only return quotes that can fit within Twitter’s 140-character limit.
// - fix styling on mobile version

$(document).ready(function() {

  var currentQuote = '';
  var currentAuthor = '';

  function openURL(url){
    window.open(url);
  }

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

  function tweetQuote() {
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  }

  function quoteWiki() {
    console.log(currentAuthor);
    //i should prob rewrite urls , store as variables
    openURL('https://en.wikipedia.org/wiki/' + currentAuthor.trim().replace(/\s/g, '_'));
  }

  getQuote();
  $('#new-quote').on('click', getQuote);
  $('#quote-wiki').on('click', quoteWiki);
  $('#tweet-quote').on('click', tweetQuote);


});
