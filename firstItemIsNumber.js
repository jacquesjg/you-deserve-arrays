const prompt = require('prompt-sync')();

const stringArray = prompt('Please enter an array: ');

const array = JSON.parse(stringArray);

console.log(typeof array[0] === 'number');






// get first item
// what type is first item
//is this type a number?
// log


// [1, "2"] returns false in node