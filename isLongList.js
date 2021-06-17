const prompt = require('prompt-sync')();

const stringArray = prompt('Please enter an array: ');

const array = JSON.parse(stringArray);

console.log((Boolean(array.length >= 10)));