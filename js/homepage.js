$(function(){
  $('.header__carousel').owlCarousel({
    loop:true,
    autoPlay: true,
    margin:10,
    nav:false,
    dots: true,
    autoplayTimeout: 1000,
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
});