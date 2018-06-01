

(function ($) {
    "use strict";
    var mainApp = {
        
        
        
        vedio_fun:function()
        {
            $(function () {
                $(".player").mb_YTPlayer();
            });
        },
        custom_fun:function()
        {
            var carouselWW = $(".carouselWW").waterwheelCarousel({
              flankingItems : 3
            });
           $('[data-toggle="tooltip"]').tooltip();
        },
    }
   
   
    $(document).ready(function () {    
        mainApp.vedio_fun();   
        mainApp.custom_fun();

    });
}(jQuery));



