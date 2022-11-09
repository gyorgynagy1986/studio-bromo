//CURSOR                
           
  const photoWork = document.querySelectorAll(".forefect");    
  const cursorMove = document.querySelector(".cursor"); 
  photoWork.forEach(element => {
    element.addEventListener("mousemove" , cursor);
    function cursor(e) {
    
    cursorMove.style.top = e.pageY + 'px';
    cursorMove.style.left = e.pageX + 'px';
}
        
element.addEventListener("mouseleave", () => {
    cursorMove.classList.remove("cursor-addclass");
    cursorMove.classList.add("cursor");
            
        });
      
element.addEventListener("mouseover", () => {
    cursorMove.classList.add("cursor-addclass");
    cursorMove.classList.add("cursor");
        });
  }); 

  //NAV

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



