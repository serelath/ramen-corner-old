$(document).ready(function(){
    
    //logo hover
    $('header').hover(
        function(){
           $('.nav-bar h3').addClass('color-change'); 
        }, function() {
           $('.nav-bar h3').removeClass('color-change');
        }
    );
    
    //menu hovers
    $('.food').hover
    (function(){ 
        $(this).find('.food-details').fadeIn(150);
    }, function() {
        $(this).find('.food-details').fadeOut(150);
    });
    
    $('.menu ul a').hover(
    (function(){
        $(this).find('li').addClass('menu-nav');
    }), function(){
        $(this).find('li').removeClass('menu-nav');
    });
    
    //refresh on resize
    window.onresize = function(){ location.reload(); }
    
    //hide sides 
    $('.more-sides').click(function(){      
        $('.hide-sides').css('display', 'inline-table');
        $('hr .hide-sides').css('display', 'block');
        $(this).hide();
        $('.less-sides').show()
    })   
    $('.less-sides').click(function(){
        $(this).hide();
        $('.more-sides').show();
        if ($(window).width() > 780) {
            $('.desktop-hide-sides').hide();
        }
        if ($(window).width() > 524) {
            $('.tablet-hide-sides').hide();
        }
        if ($(window).width() < 524) {
            $('.hide-sides').hide();
        }
        $('hr .hide-sides').hide();
    })
    $('.more-sides').hover(function(){
        $('.more-sides i').addClass('color-change');
    }, function(){
        $('.more-sides i').removeClass('color-change');
    });
    $('.less-sides').hover(function(){
        $('.less-sides i').addClass('color-change');
    }, function(){
        $('.less-sides i').removeClass('color-change');
    });
    
    //read more
    $('.read-more').click(function() {
        $(this).closest('.large-text').find('.hide').show(); 
        $(this).hide();
    });
    
    $('.read-less').click(function() {
        $(this).closest('.large-text').find('.hide').hide(); 
        $('.read-more').show();
    });
    
    //if menu in view

    
    
    //mobile
    
        $('#mobile-icon').hover(
        function(){
            $('i').addClass('rotate');
        }, function(){
            $('i').removeClass('rotate');
        });
        $('#mobile-icon').click(function(){
            $('#mobile-nav').slideToggle();
        })
        $('main, footer, a').click(function(){
            $('#mobile-nav').slideUp();
        })
    
    //nav scroll
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        
    } else {
        
    }
    });  
    
    //fixed order scroll  
    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    
    $(window).on('resize scroll', function() {
          $('#entire-menu').each(function() {
              var activeColor = $(this).attr('id');
            if ($(this).isInViewport() && $(window).width() > 1080) {
                $('#order-here-cont').css('bottom', '0vw');
            }  else if ($(this).isInViewport() && $(window).width() > 780){
                $('#order-here-cont').css('bottom', '0vw');
            } else if ($(window).width() > 780) {
                $('#order-here-cont').css('bottom', '-7.5vw');
            }
              else if ($(this).isInViewport() && $(window).width() > 524){
                $('#order-here-cont').css('bottom', '0vw');
            } else if ($(this).isInViewport()){
                $('#order-here-cont').css('bottom', '-0vw');
            }
              else {
                $('#order-here-cont').css('bottom', '-7.5vw');
            }
          });
        }); 
    
    $(window).on('resize scroll', function() {
          $('.gallery.seven').each(function() {
              var activeColor = $(this).attr('id');
            if ($(this).isInViewport() && $(window).width() > 1080) {
                $('#order-here-cont').css('bottom', '-4vw');
            } else if ($(this).isInViewport()) {
                $('#order-here-cont').css('bottom', '-7.5vw');
            }
        });
    });
    $(window).on('resize scroll', function() {
          $('#ink').each(function() {
              var activeColor = $(this).attr('id');
            if ($(this).isInViewport() && $(window).width() > 1080) {
                $('#order-here-cont').css('bottom', '-4vw');
            } else if ($(this).isInViewport()) {
                $('#order-here-cont').css('bottom', '-7.5vw');
            }
        });
    });
    
    //order
    $('#order-here, #order-link').click(function(){     
            $('#order-bg').show();
            $('#order-page').show().addClass('slideUp');  
            $('.order-location img, .order-location h2').show().css('opacity', '0.85');
    })
    
    //hide
    $(document).mouseup(function(e) 
    {
        var container = $("#order-form, #order-here-cont, #order-link");
        
        if (!container.is(e.target) && container.has(e.target).length === 0 && $('#order-page').css('opacity') == '1') 
        {
            $('#order-bg').hide();
            $('#order-page').addClass('slideDown');
            setTimeout(function () {      
                $('#order-page').hide();
                $('#order-page').removeClass('slideDown');
                $('#order-page').removeClass('slideUp'); 
                $('#order-page').hide();
            }, 450);
        };
    });
    
    //order locations
    $('.order-location img').hover(function(){
        $(this).css('opacity', '1');
    }, function(){
        $(this).css('opacity', '0.875');
    });
    $('.order-location img').click(function(){
        $('.order-location img, .order-location h2').css('opacity', '0');
        setTimeout(function () {      
            $(".order-location img, .order-location h2").hide(); 
            $('#fill-out').addClass('slideUp').show();
        }, 200);
    })
    
    
    // initialize paroller.js 
    
    // initialize paroller.js and set attributes 
    $("#landing").paroller({ factor: '0.3', type: 'background', direction: 'vertical' });
    
    $("#our-story").paroller({ factor: '0.3', type: 'background', direction: 'vertical' });
    
    $(".menu").paroller({ factor: '0.2', type: 'foreground', direction: 'vertical' });
    
    $("#info").paroller({ factor: '0.3', type: 'background', direction: 'vertical' });

});// end of jQuery