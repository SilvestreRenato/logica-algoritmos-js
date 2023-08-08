// Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total.
// Elaborar um programa que leia descrição e preço de um medicamento. Informe o valor do produto na promoção.

const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener('submit', (ev) => {
  ev.preventDefault()

  const medicine = frm.inMedicine.value
  const price = Number(frm.inPrice.value)
  
  const total = price * 2
  const discount = Math.floor(total)

  resp1.innerText = `Promoção de ${medicine}`
  resp2.innerText = `Leve 2 por apenas R$: ${discount.toFixed(2)}` 
})