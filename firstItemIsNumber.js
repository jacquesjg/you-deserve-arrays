const prompt = require('prompt-sync')();

const stringArray = prompt('Please enter an array: ');

const array = JSON.parse(stringArray);

console.log(Boolean(Number.isNaN(array[0])));


// [1, "2"] returns false in node