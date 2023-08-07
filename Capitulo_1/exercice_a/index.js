const showBtn = document.querySelector('button')

showBtn.addEventListener('click', () => {
  const number = Number(document.querySelector('#number').value)

  const predecessor = number - 1
  const successor = number + 1

  const predecessorSpan = document.querySelector('#predecessor')
  const successorSpan = document.querySelector('#successor')

  predecessorSpan.textContent = predecessor
  successorSpan.textContent = successor
})