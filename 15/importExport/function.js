export function hello(username='Stranger'){
    alert(`Hello ${username}`);
}


function summ(a,b){
    console.log(`Result ${a}+${b} = ${a+b}`);
}

function minus(a,b){
    console.log(`Result ${a}-${b} = ${a-b}`);
}

export {summ, minus}