(function(){
  $("#site-header").load("/pages/load-header.html");
  $("#site-footer").load("/pages/load-footer.html");
  $("#modals").load("/pages/load-modals.html");

  $.getScript("/assets/scripts/jquery-3.3.1.min.js");
  $.getScript("/assets/scripts/resize-listener.js")
  // $.getScript("/assets/scripts/menus.js");
  $.getScript("/assets/scripts/menu.js");
  // $.getScript("/assets/scripts/header-opacity.js");
  $.getScript("/assets/scripts/slideshow.js");
  $.getScript("/assets/scripts/modal.js");
  $.getScript("/assets/scripts/print.js");
  
})()

