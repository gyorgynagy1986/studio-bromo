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


  const loader = document.getElementById('preloader');

window.addEventListener('load', function(load) {
  window.removeEventListener('load', load, false);               
  setTimeout(function(){loader.style.display = 'none'},500);

  sr.reveal(`.header_title`, { origin: 'top', distance: '50px',} )
  sr.reveal(`.header_main-text-container`, { delay: 650, origin: 'top', distance: '0px',} )
  sr.reveal(`.header_main-services-box-h4`, {duration: 1700, origin: 'top', distance: '15px',} )
  sr.reveal(`.btnUp`, {duration: 2000, delay: 100, opacity:1, origin: 'bottom', distance: '15px',} )

  if (window.matchMedia("(min-width: 1034px)").matches) {
    sr.reveal(`.works_contanier_content-box`, {duration: 2000, opacity:1, origin: 'left', distance: '150px',} )
    sr.reveal(`.works_contanier-photo`, {duration: 2000, opacity:1, origin: 'right', distance: '300px',} )
  }

  if (window.matchMedia("(max-width: 1034px)").matches) {
    sr.reveal(`.works_contanier_content-box`, {duration: 2000, opacity:0, origin: 'top', distance: '50px',} )
  }


  if (window.matchMedia("(min-width: 1034px)").matches) {
    sr.reveal(`.ef1`, {duration: 2000, opacity:0, origin: 'left', distance: '50px',} )
    sr.reveal(`.ef2`, {duration: 2000, opacity:0, origin: 'right', distance: '50px',} )
    sr.reveal(`.ef3`, {duration: 2000, opacity:0, origin: 'right', distance: '0px',} )
  }


  if (window.matchMedia("(max-width: 1034px)").matches) {
    sr.reveal(`.text-left1`, {duration: 2000, delay: 200,  opacity:0, origin: 'left', distance: '100px',} )
    sr.reveal(`.text-left2`, {duration: 2000, delay: 300, opacity:0, origin: 'left', distance: '100px',} )
    sr.reveal(`.text-left3`, {duration: 2000, delay: 400, opacity:0, origin: 'left', distance: '100px',} )
    sr.reveal(`.text-left4`, {duration: 2000, delay: 500, opacity:0, origin: 'left', distance: '100px',} )
    sr.reveal(`.text-left5`, {duration: 2000, delay: 600, opacity:0, origin: 'left', distance: '100px',} )

    
  }
 

},false);
  
  
  
  
  
