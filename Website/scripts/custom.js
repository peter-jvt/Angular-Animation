var active;

$(function () {
    $("#blocker").hide();
    // test: load data and use page transition inline

    //var requestUrl = "/products/";
    //var request = $.ajax(requestUrl);

    //// Store contents in cache variable if successful
    //request.success(function (html) {
    //    // Clear cache varible if it"s getting too big
    //    //utility.storePageIn(cache, url, html);
    //    //$container.data("smoothState").cache = cache;
    //    //html;
    //    var content = getContentById('#contentsB', html);

    //    $('#contentsB').html(content);

    //    updateHeights();
    //});

    //// Mark as error
    //request.error(function () {
    //    //cache[url].status = "error";
    //    //alert('error')
    //});

    //$('.text-click').on('click', function () {
    //    $('#contentsA').addClass('is-exiting');
    //    $('#contentsB').addClass('is-exiting');
    //});

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
                    //$container.html($content);
                    var content = getContentById('#contentsB', $content);

                    $('#contentsB').html(content);

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


// helpers:
function getContentById(id, $html) {
    $html = ($html instanceof jQuery) ? $html : htmlDoc($html);
    var $insideElem = $html.find(id);
    var updatedContainer = ($insideElem.length) ? $.trim($insideElem.html()) : $html.filter(id).html()
    var newContent = (updatedContainer.length) ? $(updatedContainer) : null;

    return newContent;
}

function htmlDoc(html) {
    var parent,
        elems = $(),
        matchTag = /<(\/?)(html|head|body|title|base|meta)(\s+[^>]*)?>/ig,
        prefix = "ss" + Math.round(Math.random() * 100000),
        htmlParsed = html.replace(matchTag, function (tag, slash, name, attrs) {
            var obj = {};
            if (!slash) {
                $.merge(elems, $("<" + name + "/>"));
                if (attrs) {
                    $.each($("<div" + attrs + "/>")[0].attributes, function (i, attr) {
                        obj[attr.name] = attr.value;
                    });
                }
                elems.eq(-1).attr(obj);
            }
            return "<" + slash + "div" + (slash ? "" : " id='" + prefix + (elems.length - 1) + "'") + ">";
        });

    // If no placeholder elements were necessary, just return normal
    // jQuery-parsed HTML.
    if (!elems.length) {
        return $(html);
    }
    // Create parent node if it hasn't been created yet.
    if (!parent) {
        parent = $("<div/>");
    }
    // Create the parent node and append the parsed, place-held HTML.
    parent.html(htmlParsed);

    // Replace each placeholder element with its intended element.
    $.each(elems, function (i) {
        var elem = parent.find("#" + prefix + i).before(elems[i]);
        elems.eq(i).html(elem.contents());
        elem.remove();
    });

    return parent.children().unwrap();
}