$(document).ready(function() {
 
  // hide #back-top first
  $("#to-the-stars").hide();

  // fade in #back-top
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('#to-the-stars').fadeIn();
          } else {
              $('#to-the-stars').fadeOut();
          }
      });

      // scroll body to 0px on click
      $('#to-the-stars a').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 250);
          return false;
      });
  });

});
