
/*--------- Wow Js ----------*/
$(document).ready(function() {
	var width = $(window).width();
	if (width <= 575) {
		$(".hero_img").removeAttr("id");
		$(".contact_form").attr("id", "contact_form");
	}
	if (width > 575) {
		$(".contact_form").removeAttr("id");
		$(".hero_img").attr("id", "contact_form");
	}
});
$(window).resize(function(){
	var width = $(window).width();
	if (width <= 575) {
		$(".hero_img").removeAttr("id");
		$(".contact_form").attr("id", "contact_form");
	}
	if (width > 575) {
		$(".contact_form").removeAttr("id");
		$(".hero_img").attr("id", "contact_form");
	}
});


    /*--------- On menu Click Move on Particular Section ----------*/

    // onclick menu scroll to div
    var width = $(window).width();
	if (width <= 575) {
	     $(".scroll_trigger").click(function (e) {
	        e.preventDefault();
	        var target = $($(this).attr("href"));
	        if (target.length) {
	            var scrollTo = target.offset().top-150; 
	            $("body, html").animate({ scrollTop: scrollTo + "px" }, 1000);
	        }
	    });
	 }

    
    /*--------- On menu Click Move on Particular Section ----------*/

    $(document).on("load, scroll", function(event){

        var scrollPos = $(document).scrollTop();
        $('.scroll_trigger').each(function () {

            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if(refElement.position() != undefined){
                if (refElement.position().top - 400 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.scroll_trigger').removeClass("active");
                    currLink.addClass("active");
                }else{
                    currLink.removeClass("active");
                }
            }

        });
    });