/*
  Elaborar um programa para simular um parquimetro, o qual leia o valor de moedas
  depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo
  de permanencia do veiculo no local e o troco (se existir). Se o valor for inferior ao tempo minimo,
  exiba a mensagem: "valor insuficiente." Considerar os valores/tempos da Tabela (max = 120min)
*/
const prompt = require('prompt-sync')()


const value = Number(prompt('Valor R$: '))
let change
let time

if (value > 3) {
  change = value - 3
  time = 120
} else if (value < 3) {
  change = value - 1.75
  time = 60
} else {
  change = value - 1
  time = 30
} 

console.log(`Tempo: ${time} minutos`)
console.log(`Troco R$: ${change}`)