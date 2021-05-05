  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

// BACK TO TOP SCROLL
$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});

// NO DOWNLOAD VIDEO 
$ (function() {
  $ ('#contentVideo').bind('contextmenu',function() { return false; });
});