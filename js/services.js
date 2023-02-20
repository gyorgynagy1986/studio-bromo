
//FILTER KISOKOS

//const dropdownBtn = document.querySelector('.dropdown-btn');
//const dropdownItems = document.querySelectorAll('.dropdown-item');
//
//
//dropdownBtn.addEventListener('click', ()=> {
//  document.querySelector('.dropdown-menu').classList.toggle('hidden');
//  
//
//})
//
//
//dropdownItems.forEach((e) => {
//  e.addEventListener('click', ()=> {
//    document.querySelector('.dropdown-menu').classList.add('hidden');
//  })
//})

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