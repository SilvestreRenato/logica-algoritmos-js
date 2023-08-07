const showValuesBtn = document.querySelector('button')

showValuesBtn.addEventListener('click', () => {
  const billValue = Number(document.querySelector('#billValue').value)
  const numOfCustomers = Number(document.querySelector('#numberOfCustomers').value)
  const resultSpan = document.querySelector('#valuePerCustomers')

  const valuePerCustomers = billValue / numOfCustomers

  resultSpan.textContent =  valuePerCustomers.toFixed(2)
})