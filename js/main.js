let menuBtn = document.querySelector('#menuBtn');
let menuDisplay = document.querySelector('.menuBox');

menuBtn.addEventListener('click', menuToggle);

function menuToggle () {
    menuDisplay.classList.toggle('hide');
}