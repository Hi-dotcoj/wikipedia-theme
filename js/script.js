$(document).ready(function() {
    // Remove default styles
    $('link[rel="stylesheet"]').remove();
    
    // Layout
    //$('body').wrapInner('<div class="wrapper"></div>');
    //$('#footer').appendTo('body');
    
    // Logo
    var logo_origin = $('#siteSub').text();
    var logo_text = logo_origin.substr(logo_origin.indexOf(" ") + 1);
    $('.mw-wiki-logo').text(logo_text);
    
    //Language
    var language = window.location.href.split("/")[2].split(".")[0].split("-")[0];
    var $p_lang = $('#p-lang');
    $('#p-lang-label').text(language).on('click', function() {
        if ($p_lang.hasClass('active')) {
            $p_lang.removeClass('active');
        }
        else {
            $p_lang.addClass('active');
        }
    });
    
    // Menu
    $('#toc a').on('click', function(e) {
        e.preventDefault();
        
        var target = $(this).attr('href').substring(1);
        var target_pos = document.getElementById(target).offsetTop;
        $('html, body').animate({
            scrollTop: target_pos - 100
        });
    });
    
    // menu title
    var page_title = $('#firstHeading').find('span').text();
    $('#toctitle').html('<a href="#" class="js-scroll-top">'+ page_title +'</a>');
    setTimeout(function() {
        $('.js-scroll-top').off().on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            });
        })
    }, 400);
    
    if ($('.wikitable').length > 0) {
        $('.wikitable').wrap('<div class="wikitable-wrap"></span>');
    }
    
    // Show 
    $('html').addClass('show');
});


