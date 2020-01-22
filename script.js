$(document).ready(function () {

    

  $(window).scroll(function () {

      if ($(document).scrollTop() > 120) {
          $("nav").addClass("scrolled");
          $(".brand-logo").addClass("scrolled");
          $(".navlist").addClass('navstack');
          $(".navbar-fixed").addClass("valign-wrapper");
      } else {
          $("nav").removeClass("scrolled");
          $(".brand-logo").removeClass("scrolled");
          $(".navlist").removeClass('navstack');
          $(".navbar-fixed").removeClass("valign-wrapper");
      }
  });

  
  


  
  $(".sidenav").sidenav();
  $('.scrollspy').scrollSpy(scrollOffset);


});