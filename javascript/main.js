

jQuery(document).ready(function($){
$('.navbar').css("background-color", "transparent");
$(window).scroll(function(){
if ($(this).scrollTop() > 600) {
$('.navbar').css("background-color", "rgba(255,255,255,0.9)").css("transition","0.3s ease-in-out ");
$('.navbar a').css("color", "black");
} else {
$('.navbar').css("background-color", "transparent").css("transition","0.3s ease-in-out ");
$('.navbar a').css("color", "white");
}
});

$("#about-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$(".mousey").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#work-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 1000);
});

$("#contact-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});
});
