$(document).ready(function () {
  $(window).scroll(function () {
      if ($(document).scrollTop() > 120) {
          $("nav").addClass("scrolled");
      } else {
          $("nav").removeClass("scrolled");
      }
  });

  $(".sidenav").sidenav();
});