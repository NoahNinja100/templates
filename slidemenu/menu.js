//By default menu is closed
//So set this to false
var menuOpen = false;

$(function() {
  //When the event "keyup" or "click"
  //go to function activated
  $("body").bind("keyup", activated);
  $("#tab").bind("click", activated);
});

function activated(event) {
  
  //Change the text of this div
  //To other text plus the keyCode String
  $("#label1").text("KEY PRESSED = " + String.fromCharCode(event.keyCode));
  
  //If keyCode is "M"
  //Or we click on div "tab"
  //Toggle a Class "open" to our "menu"
  //And flip the boolean flag on our menuOpen variable
  if(event.keyCode==77 || event.type=="click") {
    $("#menu").toggleClass("open");
    menuOpen=!menuOpen;
  
    //If menuOpen is true
    //Write something on html
    if(menuOpen) {
      $("#tab").html("X")
    } else {
      $("#tab").html("&raquo;");
    };
  
    //Change the text of this div
    //To the menuOpen boolean flag String 
    $("#label2").text("MENU OPEN: "+ menuOpen.toString());
  };
};
