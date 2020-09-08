$(document).ready(function() {
    $(function () {
      $(document).scroll(function () {
          var $nav = $(".fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $(".hero-image").height());
        });
    });
});
