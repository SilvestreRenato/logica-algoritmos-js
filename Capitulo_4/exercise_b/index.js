/* Elaborar um programa que leia a velocidadee permitida em uma estrada e a velocidade de um condutor.
Se a velocidade permitida for inferior ou igual a permitida, exiba "Sem Multa". Se a velocidade for de ate
20% maior que a permitida, exiba "Multa Leve". E se a velocidade for superior a 20% da velocidade permitida,
exiba "Multa Grave".
*/

const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const speedAllowed = Number(frm.inAllowed.value)
  const speed = Number(frm.inSpeed.value)

  if (speed > speedAllowed * 1.20) {
    resp.innerText = 'Situação: Multa Grave'
  } else if (speed > speedAllowed) {
    resp.innerText = 'Situação: Multa Leve'
  } else {
    resp.innerText = 'Situação: Sem Multa'
  }
})