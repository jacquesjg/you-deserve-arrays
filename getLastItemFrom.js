const prompt = require('prompt-sync')();

const stringArray = prompt('Please enter an array: ');

const array = JSON.parse(stringArray);

const lastIndex = array.length - 1;

const lastItem = array[lastIndex];

console.log(lastItem); 