const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const sideA = Number(frm.inSideA.value)
  const sideB = Number(frm.inSideB.value)
  const sideC = Number(frm.inSideC.value)

  if (!(sideA + sideB > sideC) || !(sideB + sideC > sideA) || !(sideC + sideA > sideB)) {
    resp1.innerText = 'Os lados não podem formar um triangulo'
    resp2.innerText = ''
    return
  } else {
    resp1.innerText = 'Lados podem formar um triangulo'
  }

  if (sideA === sideB && sideB === sideC) {
    resp2.innerText = 'Tipo: Equilatero'
  } else if (sideA === sideB || sideB === sideC || sideC === sideA) {
    resp2.innerText = 'Tipo: Isosceles'
  } else {
    resp2.innerText = 'Tipo: Escaleno'
  }

})