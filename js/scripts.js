$(document).ready(function() {
  $("#heightForm").submit(function(event) {

    event.preventDefault();

    var inputHeight = $("input#height").val();

    if (inputHeight >= 60) {
      $(".rides").show();

    } else {
      $(".rides").hide();
    }
  });
});
