$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    // var blanks = ["item1", "item2", "item3", "item4"];
    //
    // blanks.sort();
    // blanks.forEach(function(blank) {
    //   var userInput = $("input#" + blank).val().toUpperCase();
    //   $("." + blank).text(userInput);
    // });




    var blanks = [$("input#item1").val(), $("input#item2").val(), $("input#item3").val(), $("input#item4").val()];

    blanks.sort();
    var uppered = blanks.map(function(blank){
      return blank.toUpperCase();
    });
    console.log(uppered);
    var names =["item1", "item2", "item3", "item4"];

    for(var i=0; i<names.length; i++){
      $("." + names[i]).text(uppered[i]);
    }

    $("#final-list").show();
    $("#blanks").hide();

    event.preventDefault();
  });
});
