$(document).ready(function() {
  $("img.animated").hover(
    function() {
      $(this).addClass("rubberBand");
    },

    function() {
      $(this).removeClass("rubberBand");
    }
  );
});
