$(document).ready(function() {
    //to toggle text
    $(".design").click(function() {
        $(".shown-design").fadeToggle();
        $(".hidden-design").fadeToggle();
    });
    
    $(".development").click(function() {
        $(".shown-development").fadeToggle();
        $(".hidden-development").fadeToggle();
    });
    
    $(".management").click(function() {
        $(".shown-management").fadeToggle();
        $(".hidden-management").fadeToggle();
    });

    //to toggle text in portfolio class
    $(".card").hover(function() {
        $(".toggle-text",this).slideToggle("slow");
    }, function(){
        $(".toggle-text",this).fadeToggle("slow");
    })
})

//form input validation
$("#mc-embedded-subscribe-form").on('submit',function(event){
    event.preventDefault();
    let name = $("#mce-FNAME").val();
    let email = $("#mce-EMAIL").val();

    if ($("input#mce-FNAME").val() && $("input#mce-EMAIL").val()){
        alert ("Hello!!! " + name +".Thank you for reaching out to us,we'll get back to you asap.");
    }
    else {
        alert("Please provide your correct name and email!");
    }

});



