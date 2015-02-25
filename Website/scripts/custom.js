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

                    active = true;

                    $body.animate({
                        scrollTop: 0
                    });
                }
            },
            onProgress: {
                duration: 0, // Duration of the animations, if any.
                render: function (url, $container) {
                    $body.css('cursor', 'wait');
                    $body.find('a').css('cursor', 'wait');

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

                    var content = getContentById('#contents', $content);
      
                    $("#blocker").hide();
                    var id = 'page-' + randomString(8);
                    var page = jQuery('<div/>', {
                        id: id,
                        rel: 'external'
                    })
                    page.addClass('page');
                    page.width($('.page-wrapper').width());
                    page.html(content);

                    $('.page-mask').append(page);

                    updateHeights();

                    active = false;

                    animate('.page.active', id.toString());
                }
            }
        }).data('smoothState');
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

function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (!length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}