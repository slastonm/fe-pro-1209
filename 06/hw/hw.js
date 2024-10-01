//Напишіть функцію, яка приймає масив чисел, видаляє всі повторювані елементи, сортує залишки за спаданням і видаляє найбільший елемент.
let randomNumbers = [10, 5, 10, 7, 3, 4, 8, 3, 2];
function removeDuplicateAndSortArr(arr){
    let uniqArr = [];
    for(let i=0; i<arr.length; i++){
        if(!uniqArr.includes(arr[i])){
            uniqArr.push(arr[i]);
        }
    }
    console.log(uniqArr);
    uniqArr.sort((a,b)=>b-a);
    uniqArr.shift();
    return uniqArr;

}
console.log(removeDuplicateAndSortArr(randomNumbers));



// Напишіть функцію, яка приймає два масиви чисел, об'єднує їх, сортує у порядку зростання і видаляє останні 4 елементи.

let firstArr = [1,2,3];
let secondArr = [6,7,8,9];
function mergeAndSort(arr1, arr2){
    let mergeArr = arr1.concat(arr2);
    mergeArr.sort((a,b)=>a-b);
    console.log(`mergeArr ${mergeArr}`);
    let resultArr = [];
    let stopValue = mergeArr.length-2;
    for(let i = 0; i<stopValue; i++){
        resultArr.push(mergeArr[i]);
    }

    console.log(resultArr);
    return resultArr;

}
console.log(mergeAndSort(firstArr, secondArr));

// У вас є масив об'єктів, які представляють користувачів. Кожен користувач має ім'я та вік. Напишіть функцію, яка відфільтрує користувачів старших за 18 років, відсортує їх за віком у порядку зростання і видалить наймолодшого.
let users = [
    { name: 'Оля', age: 17 },
    { name: 'Іван', age: 25 },
    { name: 'Петро', age: 19 },
    { name: 'Марія', age: 30 },
];

function filterAndSortUsers(usersArr){
    let filtredUsers = [];
    for(let i=0; i<usersArr.length; i++){
        if(usersArr[i].age>18){
            filtredUsers.push(usersArr[i]);
        }
    }
    console.log(filtredUsers);
    filtredUsers.sort((a,b)=>a.age - b.age);
    console.log(filtredUsers);
    filtredUsers.shift();
    return filtredUsers;

}

console.log(filterAndSortUsers(users));
