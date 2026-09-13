const btnHamb = document.querySelector('#menu');
const nav = document.querySelector('nav');

btnHamb.addEventListener('click', () => {
    btnHamb.classList.toggle('open');
    nav.classList.toggle('open');
});