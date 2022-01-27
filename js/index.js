$(function () {
  $("#nav").click(function () {
    if ($("#navbar").is(":hidden")) {
      $("#navbar").slideDown("slow");
      $("#navbar").css("display", "flex");
      $("#nav").text("CLOSE");
      $("body").addClass("fixed-position");
    } else {
      $("#navbar").slideUp();
      $("#nav").text("MENU");
      $("body").removeClass("fixed-position");
    }
  });
});
