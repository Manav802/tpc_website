$(window).on('load resize', function()
{
	if($(window).width()>676)
	{
		$("#UIET-LOGO,#PU-LOGO").removeClass("hide");
	}
	else
	{
		$("#UIET-LOGO,#PU-LOGO").addClass("hide");
	}
	$("#TPC-LOGO").removeClass("hide");
})

