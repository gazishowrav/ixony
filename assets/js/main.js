
// =====================================================
//      main Slider
// =====================================================

var mainSlide = new Swiper('.main-slide', {
     slidesPerView: 1,
     spaceBetween: 0,
     effect: 'fade',
     autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
     pagination: {
       el: '.main-slide-pagination',
       clickable: true,
     },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

// =====================================================
//      Detail slider
// =====================================================

var bookingDetailSlider = new Swiper('.clients-slider', {
  slidesPerView: 5,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: '.clients-pagination',
    clickable: true,
  }
});


// =====================================================
//      animation
// =====================================================

AOS.init({ 
    duration: 1200, 
    easing: 'ease-out-quad', 
    once: !0, 
    startEvent: 'load' 
})

// =====================================================
//      animation
// =====================================================

$(function() {
    $('.table-show').click(function() {
      $('.table-hidden, .row-hide').toggleClass('active');
    });
});