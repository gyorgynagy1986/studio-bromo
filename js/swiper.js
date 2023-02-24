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
 

  const sr = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 3000,
    delay: 200,
    //reset: true
  })
  
  
  
    
  sr.reveal(`.header_title`, { origin: 'top', distance: '100px',} )
  sr.reveal(`.header_main-text-container`, { delay: 650, origin: 'top', distance: '0px',} )
  sr.reveal(`.header_main-services-box-h4`, {duration: 2000, origin: 'top', distance: '15px',} )
