const frm = document.querySelector('form')
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
  let list = ''
  candidates.forEach((candidate, i) => list += `${i + 1}. ${candidate.name} - ${candidate.points}\n`)
  resp.innerText = list
})

frm.approvedBtn.addEventListener('click', () => {
  const minScore = Number(prompt('Qual a pontuação minima para a proxima etapa?'))
  const approvedCandidates = candidates.filter(can => can.points >= minScore)
  const orderedCandidates = approvedCandidates.sort((a, b) => b.points - a.points)
  
  let list = ''
  orderedCandidates.forEach((can, i) => {
    list += `${i + 1}. ${can.name} - ${can.points}\n`
  })
  
  resp.innerText = list
})