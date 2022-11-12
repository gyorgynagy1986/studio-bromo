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