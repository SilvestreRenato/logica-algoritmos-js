const frm = document.querySelector('form')
const resp = document.querySelector('#out1')
const resp2 = document.querySelector('#out2')


frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const number = Number(frm.inNumber.value)

  let divisors = 'Divisores do ' + number + ': 1'
  let soma = 1

  for (i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      divisors = divisors + ', ' + i
      soma += i
    }
  }
  resp.innerText = divisors

  if (soma == number) {
    resp2.innerText = `${number} é um número perfeito.`
  } else {
    resp2.innerText = `${number} não é número perfeito.`
  }
})