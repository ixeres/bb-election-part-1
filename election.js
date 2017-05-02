$(document).ready(function() {

  // Imagination! <- I get this reference! ... That's sad.

var rootURL = 'https://bb-election-api.herokuapp.com/'

  $.ajax({
  url: rootURL,
  method: 'GET',
  dataType: 'json'
}).done(function (responseData) {
  var candidates = responseData.candidates;
  // This simplifies the syntax for printing the results, using just 'candidates' to represent the response data.
  for (var i = 0; i < candidates.length; i++) {
    // for loop that iterates through multiple candidates. Let's break it down because I don't think I have anywhere in my notes for reference.
    //
    // Defines the starting variable 'i' at 0, then checks that variable against the total number of candidates, making sure it iterates once for each candidate of the total number of candidates ('.length'). Then increments the value 'i' by one. Repeat. I HOPE YOU UNDERSTAND THIS, FUTURE DEVIN.
    $('#list').append(
      '<li>' + candidates[i].name + ': ' + candidates[i].votes +'</li>'
    );
  }
});

});
