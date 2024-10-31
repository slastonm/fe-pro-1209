// window.onload = function(){
//    let btnEl = document.querySelector('button')
//    btnEl.addEventListener('click',function(){

//    }) 
// }

$(document).ready(function(){
    // $('#myBtn').click(function(){
    //     alert('Test');
    // });
    $('#myBtn').on('click',function(){
        alert('Test2');
    });
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
})