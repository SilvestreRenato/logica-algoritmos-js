/*
  Elaborar um programa para uma empresa que leia o salario e o tempo que um funcionario trabalha na empresa. 
  Sabendo que a cada 4 anos o funcionario recebe um acrescimo de 1% no salario, calcule e informe o número de quadriênios
  a que o funcionário tem direito e o salario final.
*/
const prompt = require("prompt-sync")()
const salary = Number(prompt("Salario R$: "))
const year = Number(prompt("Tempo (anos): "))
const quad = Math.floor(year / 4)
const bonus = salary * quad / 100
console.log(`Quadrienios: ${quad}`)
console.log(`Salario Final R$: ${(salary + bonus).toFixed(2)}`)