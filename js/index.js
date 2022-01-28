$(function () {
  $("#nav").click(function () {
    if ($("#navbar").is(":hidden")) {
      $("#navbar").slideDown("slow");
      $("#navbar").css("display", "flex");
      $("#nav").text("CLOSE");
      $("#nav-secondary").css("z-index", "4");
      $("body").addClass("fixed-position");
    } else {
      $("#navbar").slideUp();
      $("#nav").text("MENU");
      $("body").removeClass("fixed-position");
      $("#nav-secondary").css("z-index", "6");
    }
  });
});

$(function () {
  $("#museum").click(function () {
    console.log("Test");
    $("#museummodal").slideToggle();
  });
});

$(function () {
  $("#museumclose").click(function () {
    console.log("Test");
    $("#museummodal").slideToggle();
  });
});
