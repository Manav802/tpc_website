$(".menu-button").on("click",function () 
{
	$(".nav-menu").toggleClass("show-on-click");       //while in mobile view this toggle the menu display
})
$(".quick-links-button").on("click",function () 
{
	$(".quick-links").toggleClass("display-on-click");       //while in mobile view this toggle the quicklinks display
})

$("#quick-links ").on("mouseleave",function ()
{
	setTimeout(function(){$(".quick-links").removeClass("display-on-click");}, 1000);
})

$("#menu-and-logo").on("mouseleave",function ()
{
	setTimeout(function(){ $(".nav-menu").addClass("show-on-click"); }, 1000);
})
