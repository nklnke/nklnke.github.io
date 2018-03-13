$(document).ready(function() {
 
  // hide #to-the-stars
  $("#to-the-stars").hide();

  // fade in #to-the-stars
  $(function () {

      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('#to-the-stars').fadeIn();
          } else {
              $('#to-the-stars').fadeOut();
          }
      });

      // scroll to 0px on click
      $('#to-the-stars a').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 250);
          return false;
      });
      
  });

});
