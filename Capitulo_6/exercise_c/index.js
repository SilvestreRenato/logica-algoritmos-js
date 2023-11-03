const frm = document.querySelector('form')
const listBtn = document.querySelector('#listBtn')
const resp = document.querySelector('pre')

const candidates = []

frm.addEventListener('submit', (ev) => {
  ev.preventDefault()

  const name = frm.inName.value
  const points = Number(frm.inPoints.value)

  candidates.push({ name, points })

  frm.inName.value = ''
  frm.inPoints.value = ''
  inName.focus()

  listBtn.dispatchEvent(new Event('click'))
})

listBtn.addEventListener('click', () => {
  
})