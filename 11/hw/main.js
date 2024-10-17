const dbClickElement = document.querySelector('#resizeableElement');

// dbClickElement.ondblclick = function(){
//     let currentWidth = dbClickElement.offsetWidth;
//     let currentHeight = dbClickElement.offsetHeight;

//     console.log(`Curent w and h offset ${currentHeight} and ${currentWidth}`);

//     let currentClientWidth = dbClickElement.clientWidth;
//     let currentClientHeight = dbClickElement.clientHeight;
//     console.log(`Curent w and h client ${currentClientHeight} and ${currentClientWidth}`);

//     dbClickElement.style.width = `${(currentWidth*2)}px`;
//     dbClickElement.style.height = `${(currentHeight*2)}px`;

// }


dbClickElement.ondblclick = function(){
    const computedStyle = getComputedStyle(dbClickElement);
    console.log(computedStyle);
    let currentWidth = parseFloat(computedStyle.width);
    let currentHeight = parseFloat(computedStyle.height);
    let curentBorderWidth = parseFloat(computedStyle.borderWidth);
    let curentFontSize = parseFloat(computedStyle.fontSize);

    dbClickElement.style.width = `${(currentWidth*2)}px`;
    dbClickElement.style.height = `${(currentHeight*2)}px`;
    dbClickElement.style.borderWidth = `${(curentBorderWidth*2)}px`;
    dbClickElement.style.fontSize = `${(curentFontSize*2)}px`;

}

let menuBtn = document.querySelector('#menuButton');
let menuList = document.querySelector('#menu');

menuBtn.onclick = function(){
    menuList.classList.toggle('d-none');
    if(menuList.classList.contains('d-none')){
        menuBtn.innerHTML = 'Відкрити меню';
    }
    else{
        menuBtn.innerHTML = 'Закрити меню';
    }
}

document.querySelector('#btnContainer').addEventListener('click',function(e){
    console.log(e.target.innerText);
    console.log(e.target);

    if(e.target.classList.contains('first')){
        alert('First button click');
    }
    else if(e.target.classList.contains('second')){
        alert('Second button click');
    }
    else{
        alert('Third button click');
    }
})