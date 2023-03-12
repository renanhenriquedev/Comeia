var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let contador = [100, 50, 20, 10, 5, 2];
let moeda = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

let valor = lines.shift();



console.log(input);
for (let pos of contador) {
    let divisao = parseInt(valor / pos)

    console.log(`${divisao} nota(s) de R$ ${pos.toFixed(2)}`)
    valor = (valor % pos) + 0.00001;
}

