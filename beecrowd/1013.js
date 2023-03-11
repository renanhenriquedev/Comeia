var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let a = input.split(' ').map(item => parseInt(item))

let b = a.map(Number)

const c = Math.max(...b)
console.log(c + ' eh o maior')
