$(document).ready(function () {
    $('.block').each(function () {
        $(this).height($(this).width());
    });

    $('.tile-new').each(function () {
        $(this).height($(this).width());
        //$(this).$(".carousel").height($(this).width());
    });


    $('.tile').each(function () {
        $(this).height($(this).width());
        //$(this).$(".carousel").height($(this).height());
    });

    //$(".tile").height($("#tile1").width());
    //$(".carousel").height($("#tile1").width());

    // TODO: deze ook verwerken want de hoogte kan ook hoger zijn maar het werkt nu
    //$(".item").height($("#tile1").width());

    $(window).resize(function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 10);
    });

    $(window).bind('resizeEnd', function () {
        $('.tile').each(function () {
            $(this).height($(this).width());
            //$(this).$(".carousel").height($(this).height());
        });
        //$(".item").height($("#tile1").width());

        $('.tile-new').each(function () {
            $(this).height($(this).width());
            //$(this).$(".carousel").height($(this).width());
        });

        $('.block').each(function () {
            $(this).height($(this).width());
        });
    });



});

