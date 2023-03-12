var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let distancia = Number(lines[0]);

let gas = Number(lines[1]);

let calculo = distancia / gas

console.log(calculo.toFixed(3) + ' km/l')

