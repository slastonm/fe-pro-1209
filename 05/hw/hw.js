//№1
// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.
let arrayUsers = ['Robert', 'Stiven', 'Monica', 'Liana', 'Tom', 'Bob', 'Ann', 'Kail'];

function  wellcomUsers(array, callback){
    for (let index = 0; index < array.length; index++) {
        callback(array[index]);
    }
}
function hiUser(user){
    console.log(`Вітаю ${user}`);
}
wellcomUsers(arrayUsers, hiUser);


//№3
// const multiplyValues = (a, b, c) => a * b * c;
function multiplyValues(a, b, c){
    let summMulti = a * b * c;
    console.log(summMulti);
    return summMulti;
}


//№4
// Створити пустий массив і заповнити його всіма парними  занченнями від 0 до 8
let array = [];
// array[0] = 0;
// array[1] = 2;
// array[2] = 4;
// array[3] = 6;
// array[4] = 8;
console.log(`Pare numbers ${array.length}`);
// i=i+2
// for(let i=0; i<=8; i+=2){
//     array.push(i);
// }
for(let i=0; i<=8; i+=2){
    array[array.length] = i;
}

// console.log(array);
console.log(`Another way ${array}`);

let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідний"];

if(days.length === plans.length){
    for(let i=0; i<days.length; i++){
        console.log(`Сьогодні ${days[i]} плани ${plans[i]}`);
    }
}
else{
    console.log('Уточніть графік');
}


//№8
// Дано масив чисел [1,2,3,4 ]Створіть функцію squareArray яка приймає масив і повертає новий масив, де кожен елемент є квадратом відповідного елемента початкового масиву. 
let arrayOld = [1, 2, 3, 4];

function squareArray(squareValue){
    let arrayNew = [];
    for(let i = 0; i < squareValue.length; i++){
        let newValue = squareValue[i]**2;
        console.log(newValue);
        // arrayNew = arrayOld.length[i];
        arrayNew[arrayNew.length] = newValue;
        // console.log(newValue);
    }
    return arrayNew;
}

console.log(`Result ${squareArray(arrayOld)}`);
let testRes = squareArray(arrayOld);
console.log(testRes);