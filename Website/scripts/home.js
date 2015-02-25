$(document).ready(function () {
    updateHeights();

    $(window).resize(function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 10);
    });

    $(window).bind('resizeEnd', function () {
        updateHeights();
    });
});

function updateHeights() {
    $('.block').each(function () {
        var h = $(this).width();
        $(this).height(h);

        $(this).find('.image').each(function () {
            $(this).height(h - 55);
        });

        $(this).find('.block-footer').each(function () {
            $(this).height(55);
        });

        $(this).find('.carousel').each(function () {
            $(this).height(h);
        });

        $(this).find('.carousel-inner').each(function () {
            $(this).height(h);
        });

    });

    $('.page-mask').width($('.page-wrapper').width());
    $('.page').width($('.page-wrapper').width());
}

function animate() {
    // Animate shit in here
    $('#contentsA').addClass('is-exiting');
    $('#contentsB').addClass('is-exiting');
}