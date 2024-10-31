let loader = document.querySelector('#loader');
let dataContainer = document.querySelector('#data');
let getBtn = document.querySelector('#loadData');

getBtn.addEventListener('click', function(){
    loader.style.display = 'block';
    setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response=>response.json())
        .then(data=>{
        loader.style.display = 'none';
        data.forEach(el=>{
            let pEl = document.createElement('p');
            pEl.innerHTML =`
            <h3>${el.title}</h3>
            <p>${el.body}</p>`;
            dataContainer.appendChild(pEl);
        })
    }).catch(e=>{
            console.log(e);
            loader.style.display = 'none';
            dataContainer.innerHTML = 'Cталась помилка';
        });

    }, 7000)
})
