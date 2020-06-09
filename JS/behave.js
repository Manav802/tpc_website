$(".menu-button").on("click",function () 
{
	$(".nav-menu").fadeToggle(1000,"swing");      //while in mobile view this toggle the menu display
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
	$(".nav-menu").fadeOut(1000,"swing"); 
})



function setWebpage() 
{
	$(".nav-menu a,.nav a,.quick-links a").on("click",function()
	{
		var name=$(this).attr("name");
		$(".content").load(name+".html"+" #page-content");
	});
}

setWebpage();