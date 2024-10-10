// 'use strict';
// let a = this;
// console.log(a); 
// (function() {
//   let a = this;
//   console.log(a); 
// })();


let now = dayjs();
console.log(now);

console.log(dayjs('2022-01-03').isValid());
console.log(dayjs('Test').isValid());



console.log(new Date().toDateString());


let notFormat = dayjs('Thu Oct 10 2024').format('DD/MM/YYYY');

console.log(notFormat);




