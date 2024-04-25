// 모바일 탭바
var wind = $(window),
MtabBar = $('.bottom-nav');
console.log(wind.scrollTop());

wind.scroll(function () {
  if (wind.scrollTop() >= 100) {
    MtabBar.addClass('show');
  } else {
    MtabBar.removeClass('show');
  }
});

// 모바일 햄버거메뉴
const tabMenu = document.querySelectorAll('.tab-menu li');
const tabContent = document.querySelectorAll('.tab-content > li');

function showContent(num) {
  tabContent.forEach(function (item) {
    item.style.display = 'none';
  });
  tabContent[num].style.display = 'block';
}

showContent(0);

tabMenu.forEach(function (item, idx) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    showContent(idx);
    tabMenu.forEach((menuItem) => {
      menuItem.classList.remove('active');
    });
    item.classList.add('active');
  });
});

// 메인배너슬라이드

var totalSlide = $('.mainbanner .swiper-slide').length;
var fragment = document.querySelector(' .banner-pagination');

fragment.innerHTML = ('<span style="color:white;">' + 1 + '</span> <span class="mainbanner_bar"></span> ' + totalSlide);

var swiper2 = new Swiper('.mainbanner', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  simulateTouch: true,
  grabCursor: true,
  speed: 800,
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
let stop = $('.stop');


stop.on('click', function () {
  swiper2.autoplay.stop();
  stop.removeClass('active');
  play.addClass('active');
});

play.on('click', function () {
  swiper2.autoplay.start();
  play.removeClass('active');
  stop.addClass('active');
})

// 아이콘메뉴
var swiper = new Swiper('.multiple', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    440: {
      slidesPerView: 5,
      spaceBetween: 25
    },
    540: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    576: {
      slidesPerView: 6,
      spaceBetween: 20
    },
    770: {
      slidesPerView: 7,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 8,
      spaceBetween: 35
    },
    1200: {
      slidesPerView: 9,
      spaceBetween: 30
    },
    1400: {
      slidesPerView: 10,
      spaceBetween: 30
    }
  }

});

$('#prev').click(function () {
  swiper.slidePrev();
});

$('#next').click(function () {
  swiper.slideNext();
});

/* 모바일/태블릿 MD'S CHOICE, NEW ARRIVAL , BEST ITEM 탭 */

let tabLink = $('.Mtabs li a');
let nestedLink = $('.Mnested-tabs li a');

tabLink.on("click", function (e) {
  e.preventDefault();
  let target = $(this).attr('href');

  tabLink.removeClass('active');
  $(this).addClass('active');
  $(target).addClass('active').siblings('.active').removeClass('active');

  $(target).find('.Mnested-tabs li:first-child a').trigger('click');
});

nestedLink.on("click", function (e) {
  e.preventDefault();
  let target = $(this).attr("href");

  nestedLink.removeClass('active');
  $(this).addClass('active');
  $(target).addClass('active').siblings('.active').removeClass("active");

});

const tabLinkActive = tabLink.filter('.active');
if (!tabLinkActive.length) {
  tabLink.first().trigger('click');
} else {
  tabLinkActive.trigger('click');
}

const swiperOptions = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    }

  }
};

$('.Mnested-content').each(function () {
  console.log('.Mnested-content');
  const swiper = new Swiper(this, swiperOptions);
});


// 하트 아이콘
$(function(){
  $(".like").click(function (e) {
    e.preventDefault()
    $(this).toggleClass("selected");
  });
});

/* PC MD'S CHOICE, NEW ARRIVAL , BEST ITEM 탭 */

let head = $('.head_wrapper'),
    gnb = $('.head_gnb');

    head.mouseenter(function(){
      gnb.addClass('active')
    });


    gnb.mouseleave(function(){
      gnb.removeClass('active')
    });


const PtabLink = $('.Ptabs li a');
const PnestedLink = $('.Pnested-tabs li a'); 

PtabLink.on("click", function (e) {
  e.preventDefault();
  const target = $(this).attr('href');

  PtabLink.removeClass('active');
  $(this).addClass('active');
  $(target).addClass('active').siblings('.active').removeClass('active');

  const PnestedLinkActive = $(target).find('.Pnested-tabs li a.active');

  if (!PnestedLinkActive.length) {
    $(target).find('.Pnested-tabs li:first-child a').trigger('click');
  } else {
    PnestedLinkActive.trigger('click');
  }
});

PnestedLink.on("click", function (e) {
  e.preventDefault();
  const target = $(this).attr("href");
  PnestedLink.removeClass('active');
  $(this).addClass('active');
  $(target).addClass('active').siblings('.active').removeClass("active");
});

const PtabLinkActive = PtabLink.filter('.active');
if (!PtabLinkActive.length) {
    PtabLink.first().trigger('click');
} else {
    PtabLinkActive.trigger('click');
}

var swiper = new Swiper('.sub-banner', {
  slidesPerView: 1,
  loop: true,
  loopedSLides: 3,
  simulateTouch: true,
  grabCursor: true,
  speed: 800,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
});

// 매거진
var swiper = new Swiper('.magazine-wrapper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: CalculateSpaceBetween(),
    },
  }
});

function CalculateSpaceBetween() {
  var containerWidth = document.querySelector('.magazine-wrapper').offsetWidth;
  var spacePercentage = 5;
  var spaceBetween = containerWidth * (spacePercentage / 100);
  return spaceBetween;
}

$(".hamburger").click(function () {
  $(".mt-menu").animate({ marginLeft: "100%" }, 300);
  $(".hamburger").hide();
  $(".cross").show();
});

$(".cross").click(function () {
  $(".mt-menu").animate({ marginLeft: "0px" }, 300);
  $(".cross").hide();
  $(".hamburger").show();
});










