

// // Exercicio Beecrowd 1012

// let a = 3

// let b = 4

// let c = 5.2

// let  π  = 3.14159

// let calculoA = (a * c) / 2

// let calculoB =  (π) * c * c


// let calculoC = ((a + b) * c) / 2

// let calculoD = b * b

// let calculoE = a * b

// console.log(`TRIANGULO: ${calculoA.toFixed(3)}\nCIRCULO: ${calculoB.toFixed(3)}\nTRAPEZIO: ${calculoC.toFixed(3)}\nQUADRADO: ${calculoD.toFixed(3)}\nRETANGULO: ${calculoE.toFixed(3)}`);

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [a,b,c] = input.split(" ").map(item => parseFloat(item))

let a = Number(lines[0])

let b = Number(lines[1])

let c = Number(lines[2])

let  π  = 3.14159

let calculoA = (a * c) / 2

let calculoB =  (π)* c * c

let calculoC = (( a+ b )* c) / 2

let calculoD = b * b

let calculoE = a * b
console.log(`TRIANGULO: ${calculoA.toFixed(3)}\nCIRCULO: ${calculoB.toFixed(3)}\nTRAPEZIO: ${calculoC.toFixed(3)}\nQUADRADO: ${calculoD.toFixed(3)}\nRETANGULO: ${calculoE.toFixed(3)}`);

