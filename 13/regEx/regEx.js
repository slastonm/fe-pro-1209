let simpleSt = /JS/;
let simpleYear = /\d\d\d\d/g;

let simpleStrSecond = new RegExp('hi');

let textPatern  ="Lorem ipsum dolor sit, amet consectetur adipisicing 1734 elit. Autem iure quod, suscipit esse corrupti laboriosam impedit voluptatem aspernatur explicabo! Illo 1994 fugiat eius atque sit excepturi laudantium quisquam ratione at 2005 quo.";

let searchIndex = textPatern.search(simpleYear);
console.log(`Search index ${searchIndex}`);


let newText = textPatern.replace(simpleYear, '!!!!');
console.log(newText);


let matchResult = textPatern.match(simpleYear);
console.log(matchResult);

//test

let pinCodePatern = /\d\d\d\d/;

console.log(`Test pincode ${pinCodePatern.test('123')}`);
console.log(`Test pincode ${pinCodePatern.test('1234')}`);
console.log(`Test pincode ${pinCodePatern.test('12 3')}`);
console.log(`Test pincode ${pinCodePatern.test('123a')}`);
console.log(`Test pincode ${pinCodePatern.test('12 34')}`);
console.log(`Test pincode ${pinCodePatern.test('12ab')}`);


let styleName = 'css';
console.log(`Test string start c ${/^c/.test(styleName)}`);
console.log(`Test string end ss ${/ss$/.test(styleName)}`);

let timeString = '7:30';
let timeRegEx = /^\d{1,2}:\d\d$/;
console.log(`Test time ${timeRegEx.test('a17:30')}`);
console.log(`Test time ${timeRegEx.test('7:30 ')}`);
console.log(`Test time ${timeRegEx.test('07:3')}`);


let oneAndMore = /o+/g;


let textPaternO  ="Loooorem ipsum doolor sit, amet consectetur adipisicing 1734 elit. Autem iure quod, suscipit esse corrupti laboriosam impedit voluptatem o oo ooo oooo aspernatur explicabo! Illo 1994 fugiat eius atque sit excepturi laudantium quisquam ratione at 2005 quo.";

let matchOletters =  textPaternO.match(oneAndMore);
console.log(matchOletters);

let anySybol = "cat rat bat";
let anyAt = /.at/g;
let animalMatch = anySybol.match(anyAt);
console.log(animalMatch);

// ||
// /dog/
let fruits = "apple banan orange cherry";
let orRegEx = /apple|orange/g;
let matchFruits = fruits.match(orRegEx);
console.log(matchFruits);

// +38(012)123-12-23
let phoneNumber = '+38(012)123-12-231';
let phoneRegEx = /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
console.log(`Phone is valid ${phoneRegEx.test(phoneNumber)}`);


