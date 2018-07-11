alert("Welcome to Grocery Mania");
$(document).ready(function() {
  $(".groceries").submit(function(event) {
    var item1 = $("#item1").val();
    var item2 = $("#item2").val();
    var item3 = $("#item3").val();
    var item4 = $("#item4").val();
    var inPutItems = ["item1" + "item2" + "item3"+ "item4"];
    console.log(inPutItems);
    console.log(item1);
    console.log(item2);
    console.log(item3);
    console.log(item4);
    event.preventDefault();
  });
});
