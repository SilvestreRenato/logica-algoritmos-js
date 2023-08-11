const frm = document.querySelector('form')

const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
  e.preventDefault()

  const num = Number(frm.inNum.value)
  const fruit = frm.inFruit.value

  let fruits = ""

  for (i = 1; i < num; i++) {
    fruits = fruits + fruit + " * "
  }

  resp.innerText = fruits + fruit
})