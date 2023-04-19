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
 



  const btnDiscount = document.querySelector('.discount_section-button');
const bodyDiscount = document.querySelector('.body-discount');
const bodyFilter = document.querySelector('.body-discount-page');

const textDiscount = {

  title: '<p>Akciós weboldal csomag</p>',
  p1: '<p>Akciós weboldal csomagjaink előre elkészített weboldalakat tartalmaznak, melyeket díjmentesen bocsájtunk az ügyfél rendelkezésére. Az akciós csomagok esetén csak a tartalom feltöltésért és az üzembe helyezésért számolunk fel díjat. A tartalom alatt az ügyfél által biztosított szöveges tartalmat és média anyagot értjük, melyet az előre elkészített weboldalra töltünk fel. Az akciós csomag ára és a rendelkezésre álló weboldalak, honlapunk akciós felületén tekinthetők meg.</p> ',
  p2: '<p>Az előre elkészített weboldalak nem kerülnek duplikálásra, tehát a rendelkezésre bocsájtott weboldal csak egy ügyfélnek kerül átadásra, majd lekerül az akciós listáról.</p>',
  p3: '<p><b>Az akciós csomag tartalmazza</b>: ingyenes weboldal, weboldal kitöltése, üzembe helyezése, tesztelése, feltöltése az ingyenes webszerverre, ingyenes .hu-s domain regisztráció (1. évre), 3 hónapos alap karbantartási csomag, ingyenes gyors webtárhely (1. évre), alap SEO optimalizálás. </p>',
  p4: '<p><b>Amit nem tartalmaz: hozzáférés</b> a webtárhelyhez (kérhető felár ellenében). </p>',
  p5: '<p><b>Üzemben tartási díjak egy év után</b>, a következő tárgyévre: Domain hosszabbítás: a regiszter által meghatározott díj (maximum 5000 ft), tárhely FTP hozzáféréssel: 10.000 Ft, hozzáférés nélkül: 5000 Ft. </p>'

}


function modal () {
    const message = document.createElement('div');
       
       message.classList.add('modal-message');  
       
       message.innerHTML = ` ${textDiscount.title} ${textDiscount.p1} ${textDiscount.p2} ${textDiscount.p3} ${textDiscount.p4} ${textDiscount.p5} <button class="btn-modal btn--close--modal">bezár</button>`;
      
       bodyDiscount.appendChild(message);
       
       document.querySelector('.btn--close--modal')?.
         addEventListener('click',  () => {
           message.remove() // NEW METHOD
           btnDiscount.style.display = 'block'
       })
  return
}


btnDiscount.addEventListener('click', () => {
  modal ()
  btnDiscount.style.display = 'none'
})


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
   rootMargin : '500px'
 }
);

headerObserver.observe(header);

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


const btnDiscount = document.querySelector('.discount_section-button');
const bodyDiscount = document.querySelector('.body-discount');
const bodyFilter = document.querySelector('.body-discount-page');

const textDiscount = {

  title: '<p>Akciós weboldal csomag</p>',
  p1: '<p>Akciós weboldal csomagjaink előre elkészített weboldalakat tartalmaznak, melyeket díjmentesen bocsájtunk az ügyfél rendelkezésére. Az akciós csomagok esetén csak a tartalom feltöltésért és az üzembe helyezésért számolunk fel díjat. A tartalom alatt az ügyfél által biztosított szöveges tartalmat és média anyagot értjük, melyet az előre elkészített weboldalra töltünk fel. Az akciós csomag ára és a rendelkezésre álló weboldalak, honlapunk akciós felületén tekinthetők meg.</p> ',
  p2: '<p>Az előre elkészített weboldalak nem kerülnek duplikálásra, tehát a rendelkezésre bocsájtott weboldal csak egy ügyfélnek kerül átadásra, majd lekerül az akciós listáról.</p>',
  p3: '<p><b>Az akciós csomag tartalmazza</b>: ingyenes weboldal, weboldal kitöltése, üzembe helyezése, tesztelése, feltöltése az ingyenes webszerverre, ingyenes .hu-s domain regisztráció (1. évre), 3 hónapos alap karbantartási csomag, ingyenes gyors webtárhely (1. évre), alap SEO optimalizálás. </p>',
  p4: '<p><b>Amit nem tartalmaz: hozzáférés</b> a webtárhelyhez (kérhető felár ellenében). </p>',
  p5: '<p><b>Üzemben tartási díjak egy év után</b>, a következő tárgyévre: Domain hosszabbítás: a regiszter által meghatározott díj (maximum 5000 ft), tárhely FTP hozzáféréssel: 10.000 Ft, hozzáférés nélkül: 5000 Ft. </p>'

}


function modal () {
    const message = document.createElement('div');
       
       message.classList.add('modal-message');  
       
       message.innerHTML = ` ${textDiscount.title} ${textDiscount.p1} ${textDiscount.p2} ${textDiscount.p3} ${textDiscount.p4} ${textDiscount.p5} <button class="btn-modal btn--close--modal">bezár</button>`;
      
       bodyDiscount.appendChild(message);
       
       document.querySelector('.btn--close--modal')?.
         addEventListener('click',  () => {
           message.remove() // NEW METHOD
           btnDiscount.style.display = 'block'
       })
  return
}


btnDiscount.addEventListener('click', () => {
  modal ()
  btnDiscount.style.display = 'none'
})


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
   rootMargin : '500px'
 }
);

headerObserver.observe(header);

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



  
  
  
