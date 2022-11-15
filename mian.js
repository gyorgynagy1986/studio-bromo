//CURSOR                
           
//   const photoWork = document.querySelectorAll(".forefect");    
//   const cursorMove = document.querySelector(".cursor"); 
//   photoWork.forEach(element => {
//     element.addEventListener("mousemove" , cursor);
//     function cursor(e) {
//     
//     cursorMove.style.top = e.pageY + 'px';
//     cursorMove.style.left = e.pageX + 'px';
// }
//         
// element.addEventListener("mouseleave", () => {
//     cursorMove.classList.remove("cursor-addclass");
//     cursorMove.classList.add("cursor");
//             
//         });
//       
// element.addEventListener("mouseover", () => {
//     cursorMove.classList.add("cursor-addclass");
//     cursorMove.classList.add("cursor");
//         });
//   }); 

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
 

 // SWIPER

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



// STICKY NAVIGATIOn


const sectionWorks = document.querySelector('.works');
const nav = document.querySelector('.nav');

//initialCord = sectionWorks.getBoundingClientRect();
//
//window.addEventListener('scroll', () => {
//// console.log(window.scrollY, 'from scroll'); 
//
//if(window.scrollY > initialCord.top ) {
// nav.classList.add('sticky')
//} else {
//  nav.classList.remove('sticky')
//
//}
//
//});


//const observCb = function (entries, observer) {
//  const [entry] = entries;
//
//  if(!entry.isIntersecting) nav.classList.add('sticky');
//  else nav.classList.remove('sticky');
//};
//
//const observOption = {
//  root: null,
//  treshold: 0,
//  rootmargin: '0px'
//};
//
//const observer = new IntersectionObserver 
//  (observCb, observOption);
//  observer.observe(sectionWorks);
//

const header = document.querySelector('.header');

const stickyNav = function(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
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

