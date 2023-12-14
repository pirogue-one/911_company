'use strict'

// modal window 

const closeBtn = document.querySelector('#close-btn');
const modalMenu = document.querySelector('#main-modal_menu__wrapper');
const mobMenu = document.querySelector('#burger-menu');

mobMenu.addEventListener('click', () => {
    modalMenu.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modalMenu.style.display = 'none';
})


//mouse move

let mouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.hero');

const startDragging = (e) => {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

const stopDragging = (e) => {
    mouseDown = false;
}

const move = (e) => {
    e.preventDefault();
    if (!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
}

// Add the event listeners
slider.addEventListener('mousemove', move, false);
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);