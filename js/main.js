$(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  $('.header__slide-controller-item.prev').on('click', function() {
    $('.owl-prev').click();
  });

  $('.header__slide-controller-item.next').on('click', function() {
    $('.owl-next').click();
  });
});