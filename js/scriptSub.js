$(window).on("load",function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });

})


$(document).ready(function(){
   
    $(".contact a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });

    const nav = $("#navigation1");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

    	var body = $("body");

    	if($(window).scrollTop() >= navTop){
    		body.css("padding-top",nav.outerHeight()+"px");
    		body.addClass("fixedNav");
    	}
    	else{
    		body.css("padding-top",0);
    		body.removeClass("fixedNav");
    	}


    }

});