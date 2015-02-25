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

    $('.page').width($('.page-wrapper').width());
}

function animate(id1, id2) {
    // Animate shit in here
    $(id1).addClass('is-exiting');
    $(id2).addClass('is-exiting');

    $(id1).removeClass('active');
    $(id2).addClass('active');
}