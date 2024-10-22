let customMenuEl = document.querySelector('.customMenu');
let textBlockEl = document.querySelector('.textBlock');
textBlockEl.addEventListener('contextmenu', function(e){
    e.preventDefault();
    customMenuEl.style.top = `${e.clientY}px`;
    customMenuEl.style.left = `${e.clientX}px`;
    customMenuEl.style.display ='block';
});
document.addEventListener('click', function(e){
    // e.target
    customMenuEl.style.display ='none';
});