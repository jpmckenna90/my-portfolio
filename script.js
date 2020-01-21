$(document).ready(function () {
  $(window).scroll(function () {
      if ($(document).scrollTop() > 120) {
          $("nav").addClass("scrolled");
          $(".brand-logo").addClass("scrolled");
      } else {
          $("nav").removeClass("scrolled");
          $(".brand-logo").removeClass("scrolled");
      }
  });

  $(".sidenav").sidenav();
});