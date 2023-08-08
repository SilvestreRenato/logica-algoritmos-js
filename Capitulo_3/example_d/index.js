/*
Elaborar um programa para uma veterinaria, que leia o peso de uma ração em
kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos
dias irá durar a ração e o quanto sobra da ração(em gramas).
*/

const prompt = require("prompt-sync")()
const weight = Number(prompt('Peso da ração(kg): '))
const consumption = Number(prompt('Consumo Diário (gr): '))
const weightGr = weight * 1000

const duration = Math.floor(weightGr / consumption)
const rest = weightGr % consumption

console.log(`Duração: ${duration} dias`)
console.log(`Resto ${rest}gr`)