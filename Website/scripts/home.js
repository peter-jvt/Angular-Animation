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

    //if you want to use one of the easing effects:
    //$(id1).stop().animate({
    //    scrollLeft: 0
    //}, 1500, 'easeInOutExpo');

    //id1.stop.animate({
    //    scrollLeft: 1663
    //}, 1000);
    //event.preventDefault();

    $(id1).addClass('is-exiting');
    $(id2).addClass('is-exiting');

    //setTimeout(function () {
    //    //$(id1).empty;
    //    $(id1).removeClass('active');
    //    $(id1).removeClass('is-exiting');
    //}, 5000);

    setTimeout(function () {
        $(id2).removeClass('is-exiting');
        $(id1).remove();
        $(id2).addClass('active');

    }, 1000);

}