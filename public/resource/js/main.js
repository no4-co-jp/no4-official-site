$(function() {
     (function() {
         var e, o, r = $(".main-navigation");
         if (r && (e = r.find(".menu-toggle"))) {
             o = r.find(".menu");
             if (o && o.children().length) {
                 $(".menu-toggle").on("click", function() {
                     $(this).toggleClass("on");
                     r.toggleClass("toggled-on")
                 });
             }
         } else {
             e.hide();
         }
     }());

     $("#sticky_header").sticky({ topSpacing: 0 });

     $(".go-to-top").hide();

     $(window).scroll(function() {
         var e = jQuery(window).scrollTop();
         if (e > 900) {
             $(".go-to-top").fadeIn();
         } else {
             $(".go-to-top").fadeOut();
         }
     });

     $(".go-to-top").click(function() {
         $("html,header,body").animate({scrollTop: 0}, 700);
         return false;
     });
});