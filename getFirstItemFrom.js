const prompt = require('prompt-sync')();

const stringArray = prompt('Please enter an array: ');

const array = JSON.parse(stringArray);

const firstItem = array[0];

console.log(firstItem); 