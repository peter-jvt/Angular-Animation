var active;

$(function () {
    $("#blocker").hide();

});
; (function ($) {
    'use strict';
    var $body = $('html, body'),
        content = $('#main').smoothState({
            // Runs when a link has been activated
            onStart: {
                duration: 0, // Duration of our animation
                render: function (url, $container) {
                    // toggleAnimationClass() is a public method
                    // for restarting css animations with a class
                    // content.toggleAnimationClass('is-exiting');
                    // Scroll user to the top
                    $body.animate({
                        scrollTop: 0
                    });


                    //                    $('.page-wrapper').fadeTo("slow", 0.33);

                    //if (active) {
                    //    $(active).addClass("is-exiting");
                    //    if (active == '#contentsA') {
                    //        active = '#contentsB';
                    //    }
                    //    else {
                    //        active = '#contentsA';
                    //    }
                    //}
                    //else {
                    //    active = '#contentsA';
                    //    $('#contentsA').addClass("is-exiting");
                    //}
                }
            },
            onProgress: {
                duration: 0, // Duration of the animations, if any.
                render: function (url, $container) {
                    $body.css('cursor', 'wait');
                    $body.find('a').css('cursor', 'wait');

                    active = true;
                    var showTimeout = setTimeout(function () {
                        if (active) {
                            $('#blocker').show();
                        }
                    }, 1000);
                }
            },
            onEnd: {
                duration: 0, // Duration of the animations, if any.
                render: function (url, $container, $content) {
                    $body.css('cursor', 'auto');
                    $body.find('a').css('cursor', 'auto');

                    //$container.html($content);
                    //$('#contentsB').html($content.filter('#contents').html());

                    //$('.page-wrapper').fadeIn();
                    $container.html($content);
                    updateHeights();
                    active = false;
                    $("#blocker").hide();

                    animate();

                    // $('#contentsB').addClass("is-entering");
                    //console.debug(active);

                    //if (active) {
                    //    $(active).addClass("is-entering");
                    //}
                    //else {
                    //    active = '#contentsB';
                    //    $('#contentsB').addClass("is-entering");
                    //}

                    //if (active == '#contentsA') {
                    //    active = '#contentsB';
                    //}
                    //else {
                    //    active = '#contentsA';
                    //}

                    //console.debug(active);
                }
            }
        }).data('smoothState');
    //.data('smoothState') makes public methods available
})(jQuery);