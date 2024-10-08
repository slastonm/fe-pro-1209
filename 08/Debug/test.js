let firstValue = 2;
let secondValue = 3;
let restult = firstValue+secondValue;
console.log(restult);

let dataArr = ['Hello', 'Test', 'Value'];
function testFn(value){
    return value+33;
}

dataArr.forEach(item=>{
    let res = testFn(item);
    console.log(`res:${res}`);
})