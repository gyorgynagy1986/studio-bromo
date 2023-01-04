const swiper = new Swiper('.swiper-container', {

    slidesPerView: 1,
    spaceBetween: 130,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-left',
      prevEl: '.swiper-button-right',
    },
  });
 