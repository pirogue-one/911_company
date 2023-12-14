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


//////////////mouse move

//first slider

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

slider.addEventListener('mousemove', move, false);
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);



//second slider

let mouseDownTwo = false;
let startXTwo, scrollLeftTwo;
const sliderTwo = document.querySelector('.news');

const startDraggingTwo = (e) => {
    mouseDownTwo = true;
    startXTwo = e.pageX - sliderTwo.offsetLeft;
    scrollLeftTwo = sliderTwo.scrollLeft;
}

const stopDraggingTwo = (e) => {
    mouseDownTwo = false;
}

const moveTwo = (e) => {
    e.preventDefault();
    if (!mouseDownTwo) { return; }
    const x = e.pageX - sliderTwo.offsetLeft;
    const scroll = x - startXTwo;
    sliderTwo.scrollLeft = scrollLeftTwo - scroll;
}

sliderTwo.addEventListener('mousemove', moveTwo, false);
sliderTwo.addEventListener('mousedown', startDraggingTwo, false);
sliderTwo.addEventListener('mouseup', stopDraggingTwo, false);
sliderTwo.addEventListener('mouseleave', stopDraggingTwo, false);