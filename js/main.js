function clientWidth() {
  if(window.innerWidth != null) {
      return window.innerWidth;
  } else if (document.compatMode === "CSS1Compat") {
      return document.documentElement.clientWidth;
  }

  return document.body.clientWidth;
}

$(function(){
  // Header dropdown
  $(".header-nav__item").hover(function(){
    $(this).addClass("hover");
    $('.header-nav__submenu', this).css('visibility', 'visible');
  }, function(){
    $(this).removeClass("hover");
    $('.header-nav__submenu', this).css('visibility', 'hidden');
  });

  $(".header-nav__dropdown-btn.block-mobile").on('click', function() {
    $(this).parent('.header-nav__item').children('.header-nav__submenu').toggleClass('show');
  });

  $(".header-nav__submenu-item").on('click',function() {
    var w = clientWidth();

    if (w < 768) {
      $('.header-nav').hide();
    }
  });

  $('.header__menu').on('click', function() {
    $('.header-nav').show();
  });

  $('.header__close').on('click', function() {
    $('.header-nav').hide();
  });
});