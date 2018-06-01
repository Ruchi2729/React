/**
 * Created by ruchirapatil on 4/22/17.
 */


$(document).ready(function(){

    $("#myUL").hide();
    $("#searchInput").click(function(){
        $("#myUL").show();
    });


});

$(function() {
    if ($.browser.msie && $.browser.version.substr(0,1)<7)
    {
        $('li').has('ul').mouseover(function(){
            $(this).children('ul').css('visibility','visible');
        }).mouseout(function(){
            $(this).children('ul').css('visibility','hidden');
        })
    }
});

/* Mobile */
$('#menu-wrap').prepend('<div id="menu-trigger">Menu</div>');
$("#menu-trigger").on("click", function(){
    $("#menu").slideToggle();
});

// iPad
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if (isiPad) $('#menu ul').addClass('no-transition');

$(document).click(function(e) {

    // check that your clicked
    // element has no id=info

    if( e.target.id != 'searchInput') {
        $("#myUL").hide();
    }
});



function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    if(li.length <= -1)
    {
        $("#myUL").hide();
    }
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}