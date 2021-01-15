// $(window).on("load", function () {
//     AOS.refresh();
// });

$(function () {
    // AOS.init({
    //     once: true,
    //     disable: "mobile",
    // });
    // $(window).on("scroll", function () {
    //     AOS.refresh();
    // });
    if(window.innerWidth > 992){
      $(".content-wrapper").addClass("active");
      $(".dash-navbar-left").addClass("active");
      $("nav").addClass("active");
      $('nav-torger').addClass("active");

      $('.nav-torger').click(function(e) {
        e.preventDefault();
        $(".content-wrapper").toggleClass("active");
        $(".dash-navbar-left").toggleClass("active");
        $("nav").toggleClass("active");
        $(this).toggleClass("active");

      });
    }else {
      $('.nav-torger , .close-sm').click(function(e) {
        e.preventDefault();
        $(".dash-navbar-left").toggleClass("active");
        $('.nav-torger').toggleClass("active");
      });

    }

});
