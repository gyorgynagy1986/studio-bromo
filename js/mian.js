const effectPrefix = document.getElementById('effect-prefix');
console.log(effectPrefix);

setTimeout(()=> {
  effectPrefix.style.opacity = '1'

}, 10)




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
 
 
 //MOBILE NAV HANDELER

 function check(checked = true) {
   const cbs = document.querySelectorAll(".mobilenav_checkbox");
   cbs.forEach((cb) => {
       cb.checked = checked;
   });
 }

 function uncheckAll() {
   check(false);
 }
 const btn = document.querySelectorAll(".mobilenav_link");
 btn.forEach(element => {
   element.addEventListener('click', uncheckAll);

 });
 

// STICKY NAVIGATIOn

const sectionWorks = document.querySelector('.works');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

const stickyNav = function(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) {
    nav.classList.add('sticky');
    nav.classList.add('slide-in-top');
  } else {
    nav.classList.remove('sticky');
    nav.classList.remove('slide-in-top');
  }
}

const headerObserver = new IntersectionObserver(
  stickyNav, {
    root:  null,
    threshold: 0,
    rootMargin : '-90px'
  }
);

headerObserver.observe(header);

// NAV HOVER

const hoverHandler = function(e) {
  if(e.target.classList.contains('nav_link')) {
    const link = e.target;
    const siblings = link.closest('.nav').
    querySelectorAll('.nav_link');

    siblings.forEach(el => {
      if(el !== link) el.style.filter = `blur(${this}px)` 
    });
  }
}

nav.addEventListener('mouseover', hoverHandler.bind(0))
nav.addEventListener('mouseout', hoverHandler.bind(0));


// COOKIES 


const message = document.createElement('div');

 function cookieHandvet () {

  if(localStorage.getItem('Cookie')) {
    console.log('A stüik 🍪🍪🍪🍪 már el vannak fogadva :)')
    return
  } else {
  
    message.classList.add('cookie-message');
    message.innerHTML = '<div class="cookie-container">Kedves Látogató 😊 Weboldalunk alapértelmezés szerint sütiket 🍪🍪 használ elemzési célokra. <a href="/sutik.html">Látogass el ide ha többet szeretnél tudni erről, illetve ha információra van szükséged a kikapcsolásukhoz.</a></div><button class="btn-cookie btn--close--cookie">bezár</button>';
  
    header.append(message);
  
    document.querySelector('.btn--close--cookie')?.
      addEventListener('click',  () => {
        localStorage.setItem("Cookie", "Cookie Accepted");
        message.remove() // NEW METHOD
    console.log("hello");
    })
  
  }
}

setTimeout(cookieHandvet, 3000);



