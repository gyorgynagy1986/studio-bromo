// SUBS 

const buttonContainer = document.querySelector('.subscribe-btn__container');
const buttonEfect = document.querySelectorAll('.btns');
const activeTextContainer = document.querySelectorAll('.subscribe-container__text');


buttonContainer.addEventListener('click', (e)=> {

  const click = e.target.closest('button');

  if (!click) return;

  buttonEfect.forEach(remove => remove.classList.remove('button-effect-active') )
  activeTextContainer.forEach(r => r.classList.remove('subscribe-active') )

  click.classList.add('button-effect-active')

  const text = document.querySelector(`.ctr-${click.dataset.tab}`)
  text.classList.add('subscribe-active');

})


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
    rootMargin : '10px'
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
