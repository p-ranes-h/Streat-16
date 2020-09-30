/*
 Template Name: Cafeberry
 File Name: custom.js
 Author Name: ThemeVault
 Author URI: http://www.themevault.net/
 License URI: http://www.themevault.net/license/
 */

$(window).load(function () {
// Animate loader off screen
    $("#loader-wrapper").fadeOut("slow");
    ;
});
$(document).ready(function () {
    jQuery(".hover").mouseleave(
            function () {
                jQuery(this).removeClass("hover");
            }
    );
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    $('#back-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});
