
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


const hoverHandler = function(e, opacity) {
  if(e.target.classList.contains('nav_link')) {
    const link = e.target;
    const siblings = link.closest('.nav').
    querySelectorAll('.nav_link');

    siblings.forEach(el => {
      if(el !== link) el.style.filter = `blur(${this}px)` 
    });
  }
}


nav.addEventListener('mouseover', hoverHandler.bind(1))

nav.addEventListener('mouseout', hoverHandler.bind(0));

// Dark mode

// COLOR FOR BOXES

const darkModeButton = document.querySelector('h1');
console.log(darkModeButton);

darkModeButton.style.cursor = 'pointer';


darkModeButton.addEventListener('click', () => {
 

  document.documentElement.style.setProperty();
 
})
  


// darkModeButton.addEventListener('click', () => {
//   document.documentElement.style.setProperty("--mainBcGroung", "black");
//   document.documentElement.style.setProperty("--secBcground", "black");
//   document.documentElement.style.setProperty(""--secBcground", "black");
//   document.documentElement.style.setProperty("--nav", "white");
//   document.documentElement.style.setProperty("--boxes", "#1a1a1b");
// 
// })


grecaptcha.ready(function() {
    grecaptcha.execute('6LfA69YjAAAAABRkLoCxfl_r0JeVMTBD4WDjSnag', {action: 'homepage'})
    .then(function(token) {
      document.getElementById('captchaResponse').value = token;
      console.log( document.getElementById('captchaResponse').value = token);
    });
  });
