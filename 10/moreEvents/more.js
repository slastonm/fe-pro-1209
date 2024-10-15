let mouseEl = document.querySelector('.mouse');
mouseEl.addEventListener('mousedown',function(e){
    console.log(e);
    this.innerText = `Event ${e.type} Alt key ${e.altKey} Ctrl key ${e.ctrlKey} shiftKey ${e.shiftKey}`;
});
// mouseEl.addEventListener('mouseup',function(e){
//     this.innerText = e.type;

// });