const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (ev) => {
  ev.preventDefault()

  const numChinchilas = Number(frm.inChin.value)
  const years = Number(frm.inYears.value)

  let response = ""
  let total = numChinchilas

  for (let i = 1; i <= years; i++) {    
    response = response + i + "º Ano: " + total + " Chinchilas\n"
    total = total * 3
  }

  resp.innerText = response
})
