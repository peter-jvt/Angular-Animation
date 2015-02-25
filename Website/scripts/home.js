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

    //$(".tile").height($("#tile1").width());
    //$(".carousel").height($("#tile1").width());

    // TODO: deze ook verwerken want de hoogte kan ook hoger zijn maar het werkt nu
    //$(".item").height($("#tile1").width());
}

function animate() {
    // Animate shit in here
}