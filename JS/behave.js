$(".menu-button").on("click",function () 
{
	$(".nav-menu").fadeToggle();      //while in mobile view this toggle the menu display
})

$(".quick-links-button").on("click",function () 
{
	$(".quick-links").toggleClass("hide-if-small-screen");    //while in mobile view this toggle the quicklinks display
})

$("#quick-links ").on("mouseleave",function ()
{
	$(".quick-links").addClass("hide-if-small-screen");	
})


$("#menu-and-logo").on("mouseleave",function ()
{
	$(".nav-menu").fadeOut(); 
})


$(document).ready(function(){
$("#about").click(
  	function()
  	{
  		$(".content").load("about.html #page-content");
  	});
});


