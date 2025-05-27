/* Safety Sciences Advantage Slider */
$( document ).ready(function() {

    /*Sticky Header*/
    //$("#sticky-header").sticky({topSpacing:0});

    $(".main-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true, 
        arrows:false,
    });

    /* Case Study Slider */
    $(".case-study-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
          {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ] 
    });

    /* Employee Slider */
    $(".empolyee-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
          {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ] 
    });

    /* Our Golden Clients Slider */
    $(".clients-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ] 
    });

    /* Industry leaders Slider */
    $(".leaders-slider").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ] 
    });

    /* Google Reviews Slider */
    $(".reviews-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ] 
    });

 
   /* Our Brands Slider */
   $(".our-team-slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, 
    pauseOnHover:true,
    arrows:false,
    responsive: [
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ] 
    });

    /* Our Brand Slider */
    $(".our-brands-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ] 
    });

    /* News Insights Slider */
    $(".insights-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ] 
    });

    /********************** wow animation *********************/
    // wow animation off on Mobile
    wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
    }
    )
    wow.init();

});

// Start Counter 
/*var counted = 0;
$(window).scroll(function() {

var oTop = $('#counter').offset().top - window.innerHeight;
if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({
        countNum: $this.text()
    }).animate({
        countNum: countTo
        },

        {

        duration: 2000,
        easing: 'swing',
        step: function() {
            $this.text(Math.floor(this.countNum));
        },
        complete: function() {
            $this.text(this.countNum);
            //alert('finished');
        }

        });
    });
    counted = 1;
}

});
// End Counter 
*/

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});