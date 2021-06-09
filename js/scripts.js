$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").addClass("dark-background");
  });

  $("button#light").click(function() {
    $("body").addClass("light-background");
  });
});