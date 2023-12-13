// mouse 

// let mouseDown = false;
// let startX, scrollLeft;
// const slider = document.querySelectorAll('.news');

// const startDragging = (e) => {
//     mouseDown = true;
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// }

// const stopDragging = (e) => {
//     mouseDown = false;
// }

// const move = (e) => {
//     e.preventDefault();
//     if (!mouseDown) { return; }
//     const x = e.pageX - slider.offsetLeft;
//     const scroll = x - startX;
//     slider.scrollLeft = scrollLeft - scroll;
// }