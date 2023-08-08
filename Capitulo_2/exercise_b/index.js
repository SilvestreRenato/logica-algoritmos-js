/*
  Elaborar um programa para um lan house de um aeroporto - O programa deve ler o valor de cada 15min de uso
  de um computador e o tempo de uso por um cliente em minutos. Informe o valo a ser pago pelo cliente, 
  sabendo que as frações extrar de 15minutos devem ser cobradas de forma integral.
*/

const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')

frm.addEventListener('submit', (ev) => {
  ev.preventDefault()

  const price = frm.inPrice.value
  const time = frm.inTime.value

  const totalFractions = Math.ceil(time / 15)
  const totalPrice = totalFractions * price

  resp1.innerText = `Valor a Pagar R$: ${totalPrice.toFixed(2)}`
})