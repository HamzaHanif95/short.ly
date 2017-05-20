$(document).ready(function(){
  $('#url-shortner-form').submit(function(e) {
    e.preventDefault();
    var userInput = $('#oUrl').val().trim();
  
    if(!userInput) {
      return alert('Enter a valid Url');
    }
  
    axios.post('/shorten', {
      url: userInput
    })
    .then(function (response) {
      // show the div
      $('#display').show();
      // show the text
      console.log(response);
      $('#display-title').attr('href', document.location.origin + '/' + response.data.shortenedUrl);
      $('#display-title').text(document.location.origin + '/' + response.data.shortenedUrl);
    })
    .catch(function (error) {
      console.log(error);
    });
  });
});
