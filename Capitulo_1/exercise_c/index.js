const showValuesBtn = document.querySelector('button')

showValuesBtn.addEventListener('click', () => {
  const productPrice = Number(document.querySelector('#price').value)
  const cashValueSpan = document.querySelector('#cashValue')
  const installmentSpan = document.querySelector('#installmentValue')
  const cashValue = productPrice - (productPrice * 0.10)
  const installmentsValue = productPrice / 3


  cashValueSpan.textContent = `Valor à vista R$: ${cashValue.toFixed(2)}`
  installmentSpan.textContent = `ou 3x de R$: ${installmentsValue.toFixed(2)}`
})