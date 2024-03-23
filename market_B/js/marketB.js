let head = $('.head_wrapper'),
    gnb = $('.head_gnb');

    head.mouseenter(function(){
      gnb.addClass('active')
    });

    gnb.mouseleave(function(){
      gnb.removeClass('active')
    });

  const tabLink = $('.tabs li a');
  const nestedLink = $('.nested_tabs li a'); 

  tabLink.on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr('href');

    tabLink.removeClass('active');
    $(this).addClass('active');
    $(target).addClass('active').siblings('.active').removeClass('active');

    const nestedLinkActive = $(target).find('.nested_tabs li a.active');

    if (!nestedLinkActive.length) {
      $(target).find('.nested_tabs li:first-child a').trigger('click');
    } else {
      nestedLinkActive.trigger('click');
    }
  });

  nestedLink.on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
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

      $(".youtube-link").grtyoutube({
      autoplay: true,
      theme: "dark"
    });

