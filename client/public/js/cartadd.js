/**
 * Created by ruchirapatil on 4/21/17.
 */

$(document).ready(function() {


    if ( 0 < $('.product button').length ) {
        $('.product button').click(function() {
            var offset = $(this).parent().offset();

            $(this).parent().parent().children(':first-child').clone().addClass('product-clone').css({
                'left' : offset.left + 'px',
                'top' : parseInt(offset.top-$(window).scrollTop()) + 'px',
                'width' :  $(this).parent().width() + 'px',
                'height' : $(this).parent().height() + 'px'
            }).appendTo($('.product').parent());


            var cart = $('.carticon').offset();
            // alert(cart);
            $('.product-clone').animate( { top: parseInt(cart.top-$(window).scrollTop()) + 'px', left: cart.left + 'px', 'height': '0px', 'width': '0px' }, 800, function(){

                $(this).remove();

            });
        });
    }

});