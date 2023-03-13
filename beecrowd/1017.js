var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let horas = Number(lines[0])

let velocidade = Number(lines[1])

let calculo = (horas / 12) * velocidade

console.log(calculo.toFixed(3));