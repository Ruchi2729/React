(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');



        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

                if (width >= 600) {
                    width = width / 4;
                } else if (width >= 350) {
                    width = width / 2;
                }

                jcarousel.jcarousel('items').css('width', width + 'px');

                $("#jc2 li").each(function(){
                    $(this).css("width",width);
                });

                $("#jc3 li").each(function(){
                    $(this).css("width",width);
                });

                $("#jc4 li").each(function(){
                    $(this).css("width",width);
                });
                $("#pjc1 li").each(function(){
                    $(this).css("width",width);
                });

                $("#pjc2 li").each(function(){
                    $(this).css("width",width);
                });

                $("#pjc3 li").each(function(){
                    $(this).css("width",width);
                });
                $("#pjc4 li").each(function(){
                    $(this).css("width",width);
                });



            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

    });



})(jQuery);
