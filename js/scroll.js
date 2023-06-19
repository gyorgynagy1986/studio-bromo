const sr = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 2000,
    delay: 200,
    //reset: true
  })
  
  
  
  
  sr.reveal(`.header_title`, { opacity:0, origin: 'top', distance: '50px',} )
  sr.reveal(`.header_main-text-container`, { delay: 650, origin: 'top', distance: '0px',} )
  sr.reveal(`.header_main-services-box-h4`, {duration: 1700, origin: 'top', distance: '15px',} )
  sr.reveal(`.btnUp`, {duration: 2000, delay: 100, opacity:1, origin: 'top', distance: '15px',} )
  
  if (window.matchMedia("(min-width: 1034px)").matches) {
    sr.reveal(`.works_contanier_content-box`, {duration: 1250,  delay: 50, opacity:1, origin: 'left', distance: '150px',} )
    sr.reveal(`.works_contanier-photo`, {duration: 1250, delay: 50,  opacity:1, origin: 'right', distance: '300px',} )
  }
  
  if (window.matchMedia("(max-width: 1034px)").matches) {
    sr.reveal(`.works_contanier_content-box`, {duration: 1000, opacity:0, origin: 'top', distance: '0',} )
  }
  
  
  if (window.matchMedia("(min-width: 819px)").matches) {
    sr.reveal(`.ef1`, {duration: 1500, opacity:0, origin: 'left', distance: '50px',} )
    sr.reveal(`.ef2`, {duration: 1500, opacity:0, origin: 'right', distance: '50px',} )
    sr.reveal(`.ef3`, {duration: 1500, opacity:0, origin: 'right', distance: '0px',} )
  }
  
  
  if (window.matchMedia("(max-width: 818px)").matches) {
    sr.reveal(`.text-left1`, {duration: 1000, delay: 100, opacity:0, origin:'top', distance: '10px',} )
    sr.reveal(`.text-left2`, {duration: 1000, delay: 100, opacity:0, origin: 'top', distance: '10px',} )
    sr.reveal(`.text-left3`, {duration: 1000, delay: 100, opacity:0, origin: 'top', distance: '10px',} )
    sr.reveal(`.text-left4`, {duration: 1000, delay: 100, opacity:0, origin: 'top', distance: '10px',} )
    sr.reveal(`.text-left5`, {duration: 1000, delay: 100, opacity:0, origin: 'top', distance: '10px',} )
  
    
  }
   