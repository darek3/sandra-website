$(".toplink").on("click", function() {
  location.reload();
})

$("#aboutme").on("click", function() {
  $("section").load("files/content.html #about");
})

$("#pricelist").on("click", function() {
  $("section").load("files/content.html #services");
})

$("#gallery, .link").on("click", function() {
  $("section").load("files/content.html #mywork");
})

$("#contact").on("click", function() {
  $("section").load("files/content.html #contactinfo");
})



$(document).on("click", "nav a", function() {

  var button = $(this).attr("id");

  $(".photo").show();
  $("section").removeClass("prices");
  $("section").removeClass("photogallery");

  if (button == "pricelist") {
    $(".photo").hide();
    $("section").addClass("prices");
  } else if (button == "contact") {
    $(".photo img").attr("src", "files/img3-min-new.jpg");
  } else if (button == "aboutme") {
    $(".photo img").attr("src", "files/sandra_at_work-min.jpg");
  } else if (button == "gallery") {
    $(".photo").hide();
    $("section").addClass("photogallery");
  }
})

$(document).on("click", ".filter a", function() {

  var button = $(this).attr("id");
  $(".sfx, .makeup, .lashes").show();


  if (button == "special") {
    $(".lashes, .makeup").hide();
  } else if (button == "eyelashes") {
    $(".sfx, .makeup").hide();
  } else if (button == "makeup-gal") {
    $(".sfx, .lashes").hide();
  }
})




$(document).on("click", "nav li", function() {
  $(this).addClass("active");
  $("nav li").not($(this)).removeClass("active");
})

$(document).on("click", ".filter a", function() {
  $(this).addClass("active");
  $(".filter a").not($(this)).removeClass("active");
})






$(".year").text(new Date().getFullYear());
