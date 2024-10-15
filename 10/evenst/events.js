// window.addEventListener('load',function()
// window.onload = function(){

// }
document.addEventListener('DOMContentLoaded',function(){
    let simpleBtn = document.querySelector('.simple');

    let count = 0;
    simpleBtn.onclick = function(){
        alert(`Count ${count}`);
        count++;
    }
    
    // function clickCounter(){
    //     alert(`Count ${count}`);
    //     count++;
    // }
    
    let addEventBtn = document.querySelector('.addEvent');
    let removeBtn = document.querySelector('.removeEvent');
    
    function showCounterAlert(){
        alert(`Counter 2: ${count}`);
        count++;
    }
    // addEventBtn.addEventListener('click', function(){
    //     showCounterAlert();
    // });
    
    addEventBtn.addEventListener('click',showCounterAlert);
    
    
    
    removeBtn.addEventListener('click', function(){
        if(count>2){
            addEventBtn.removeEventListener('click', showCounterAlert);
            alert('Done');
        }
    });
    
    const [...pElements] = document.querySelectorAll('p');
    pElements.forEach(item=>{
        item.onclick = function(){
            console.log(this);
            this.style.backgroundColor ='orange';
            this.innerText ='Changed';
        }
    });
    
    let linkEl = document.querySelector('a');
    linkEl.onclick = function(event){
        console.log(event);
        console.log(event.target);
        event.preventDefault();
    
    }
    
    let ulList = document.querySelector('ul');
    ulList.onclick = function(e){
        console.log(e.target);
        if(e.target.classList.contains('active')){
            e.target.innerText ='Active element click';
        }
    }
    
    // let productCardEl = document.querySelector('.product-card');
    let productContainer = document.querySelector('.product-row');
    // productCardEl.onclick = function(e){
    //     console.log(e.target);
    // }
    
    productContainer.onclick = function(e){
        console.log(e.target);
        let parent = e.target.parentElement;
        parent.style.backgroundColor ='gray';
    }
})