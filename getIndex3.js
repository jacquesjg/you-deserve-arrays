const prompt = require('prompt-sync')();

const stringArray = prompt('Please enter an array: ');

const array = JSON.parse(stringArray);

const element = array.length >= 3 ? array[2] : array[array.length - 1]
console.log(element); 