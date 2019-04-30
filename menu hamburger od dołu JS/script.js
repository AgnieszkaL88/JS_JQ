const arrow = document.querySelector('.arrow')
const menu = document.querySelector('nav')
const up = document.querySelector('.fas')

arrow.addEventListener('click', function () {
    menu.classList.toggle('on');
    arrow.classList.toggle('on');
})