const prompt = require('prompt-sync')();

const stringArray = prompt('Please enter an array: ');

const array = JSON.parse(stringArray);

const array2 = (array[2]);

console.log(array2[1]) 
