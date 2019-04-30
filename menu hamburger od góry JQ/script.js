var burger = document.querySelector('.burger');

var bars = document.querySelector('.fa-bars');
var angel = document.querySelector('.fa-angle-up');
var menu = document.querySelector('nav');

burger.addEventListener('click', function () {
    bars.classList.toggle('off');
    angel.classList.toggle('off');
    menu.classList.toggle('off');
})