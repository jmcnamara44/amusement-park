$(document).ready(function() {
  $("#heightForm").submit(function(event) {

    event.preventDefault();

    var inputHeight = parseInt($("#height").val());

    if (inputHeight === 1) {
        $(".rides").hide();
        $("#kids").show();

    } else if (inputHeight === 2) {
        $(".rides").hide();
        $("#kids").show();
        $("#teens").show();
    } else if (inputHeight === 3 || inputHeight === 4) {
        $(".rides").hide();
        $("#teens").show();
        $("#adults").show();
    } else {
        $(".rides").hide();
        $("#tooTall").show();
    }
  });
});
