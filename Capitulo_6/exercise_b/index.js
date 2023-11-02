const frm = document.querySelector('form')
const list = document.querySelector('h3')
const orderVer = document.querySelector('pre')

const numbers = []

frm.addEventListener('submit', (ev) => {
  ev.preventDefault()

  const number = Number(frm.inNumber.value)

  if (numbers.includes(number)) {
    alert('Este númeor já se encontra na lista, tente outro...')
    frm.inNumber.value = ""
    inNumber.focus()
    return
  } else {
    numbers.push(number)
    list.innerText = `Números: ${numbers.join(', ')}` 
    frm.inNumber.value = ""
    inNumber.focus()
  }
})

frm.checkOrderBtn.addEventListener('click', () => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  const orderedNumbersStr = orderedNumbers.join(', ')
  const numbersStr = numbers.join(', ')

  if (numbersStr == orderedNumbersStr) {
    orderVer.innerText = 'Os numeros estão em ordem!'
  } else {
    orderVer.innerText = 'Atenção... Números não estão em ordem crescente'
  }
})