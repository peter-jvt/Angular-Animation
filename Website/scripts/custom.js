

; (function ($) {
    'use strict';
    var $body = $('html, body'),
        content = $('#main').smoothState({
            // Runs when a link has been activated
            onStart: {
                duration: 250, // Duration of our animation
                render: function (url, $container) {
                    // toggleAnimationClass() is a public method
                    // for restarting css animations with a class
                   // content.toggleAnimationClass('is-exiting');
                    // Scroll user to the top
                    $body.animate({
                        scrollTop: 0
                    });
                }
            },
            onEnd: {
                duration: 0, // Duration of the animations, if any.
                render: function (url, $container, $content) {
                    $body.css('cursor', 'auto');
                    $body.find('a').css('cursor', 'auto');


                    $('#contents').addClass("is-exiting");

                    //$container.html($content);
                    $('#contentsB').html($content.filter('#contents').html());

                    updateHeights();

                    $('#contentsB').addClass("is-entering");


                }
            }
        }).data('smoothState');
    //.data('smoothState') makes public methods available
})(jQuery);