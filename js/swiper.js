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
    delay: 250,
    //reset: true
  })
  
  
  
    
  sr.reveal(`.header_title`, { origin: 'left', distance: '100px',} )
  sr.reveal(`.header_main-text-container`, { origin: 'right', distance: '100px',} )
  sr.reveal(`.header_main-services-box-h4`, {duration: 2500, origin: 'top', distance: '15px',} )
