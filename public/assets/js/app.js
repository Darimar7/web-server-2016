$(document).ready(function() {
  // Links
  

  // Events that need to be listened upon change
  $('.container').on('click', '.animate', function() {
    $('img').animate({
      left: "+=500"
    }, 2000, function() {
      $(this).animate({
        opacity: 0,
        bottom: "+=500"
      }, 2000, function() {
        $('h1').text('Complete');
      });
    });
  });
});
