function getRandomColor(){
    // rgb, rgba, hsl, hsla, #123456;
    // const r = Math.floor(Math.random()*256);
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}
function createDivs(){
    const containerEl = document.querySelector('.container');
    containerEl.style.display = 'flex';
    containerEl.style.flexWrap = 'wrap';
    containerEl.style.width = '900px';
    containerEl.style.margin = '0 auto';
    containerEl.style.gap = '20px';
    for(let i=0; i<50; i++){
        const divEl = document.createElement('div');
        divEl.style.width = '50px';
        divEl.style.height = '50px';
        divEl.style.borderRadius = '50%';
        divEl.style.backgroundColor = getRandomColor();
        containerEl.appendChild(divEl);
    }
}

createDivs();
let [...allCircle] = document.querySelectorAll('.container div');
console.log(allCircle);
allCircle.forEach(div=>{
    div.classList.add('circle-el');
});