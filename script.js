
$(document).ready(function(){
    $("#quote").on("click", function(){
        giveQuote();
    });
});

function giveQuote(){
    //$("#text").html("jo");
    $.getJSON("https://www.freecodecamp.org/json/cats.json", function(data){
        $("#text").html(JSON.stringify(data));
    });              
}