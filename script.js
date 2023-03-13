// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let number = 1//(lines.shift());

let hours = 200//(lines.shift());

let money = 20.50//(lines.shift());

let sal = hours * money;

console.log(`NUMBER = ${number}`)


console.log(`SALARY = U$ ${sal.toFixed(2)}`)


let peca_1 = 12

let peca_2 = 16

let quant_1 = 1

let quant_2 = 2

let preco_1 = 5.30

let preco_2 = 5.10

let calc_1 = quant_1 * preco_1;

let calc_2 = quant_2 * preco_2

let final = calc_1 + calc_2

console.log(`VALOR A PAGAR: R$ ${final.toFixed(2)}`)