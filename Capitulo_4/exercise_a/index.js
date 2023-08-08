/*
Elaborar um programa que leia um número. Informe se ele é par ou impar. Faça com o if... else... tradicional
e, após, tente criar a condição com o perador ternario.
*/

const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const num = Number(frm.inNumber.value)
  if (!Number.isInteger(num)) {
    console.log('Erro... O número deve ser um inteiro')
    return
  }
  
  resp.innerText = num % 2 === 0 ? `${num} é Par` : `${num} é ímpar`

  // if (num % 2 === 0) {
  //   resp.innerText = `${num} é Par`
  // } else {
  //   resp.innerText = `${num} é ímpar`
  // }

})