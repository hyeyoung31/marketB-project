
    var totalSlide = $('#swipe_main_banner .swiper-wrapper .swiper-slide').length;
    var fragment = document.querySelector('#swipe_main_banner .swiper-pagination');
    fragment.innerHTML = ('<span style="color:white;">' + 1 + '</span> <span class="mainbanner_bar"></span> ' + totalSlide);

    var swiper = new Swiper('#swipe_banner_all', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      loopedSLides: 3,
      simulateTouch: true,
      grabCursor: true,
      speed: 800,
      loopAdditionalSlides: 1,
      pagination: {
        el: '.swiper-progressbar',
        type: 'progressbar'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: function () {
          fragment.innerHTML = ('<span style="color:white;">' + (this.realIndex + 1) + '</span> <span class="mainbanner_bar"></span> ' + totalSlide);
        }
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    });
  

    let play = $('.start');
    let pause = $('.pause');
    
    
    pause.on('click', function () {
      swiper.autoplay.stop();
      pause.removeClass('active');
      play.addClass('active');
    });
    
    play.on('click', function () {
      swiper.autoplay.start();
      play.removeClass('active');
      pause.addClass('active');
    })
    
    
    
    $('.sub_banner').slick({
      autoplay: true,
      infinite: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

