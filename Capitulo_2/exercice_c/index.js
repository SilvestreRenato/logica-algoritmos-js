/*
  Um supermercado está com promoção
  para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item)
  na compra de três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após, apresente as mensagens indicando
  a promoção
*/

const frm = document.querySelector('form')
const resp1 = document.querySelector('#resp1')
const resp2 = document.querySelector('#resp2')

frm.addEventListener('submit', (ev) => {
  ev.preventDefault()

  const product = frm.inProduct.value
  const price = frm.inPrice.value

  const discount = price * 0.50
  const total = (price * 3) - discount

  resp1.innerText = `${product} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`
  resp2.innerText = `O 3 produto custa apenas R$: ${discount.toFixed(2)}`
})
