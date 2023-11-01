/*
  a) Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatoria de um campeonato. O programa deve conter três funcões (a serem executadas no evento click de cada botão) para:
  1) Validar o preenchimento, adicionar um clube ao vetor e listar os clubes;
  2) Listar os clubes (se houver);
  3) Montar a tabela de jogos, no formato primeiro x ultimo, segundo x penultimo e assim por diante. Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informados seja impar.
*/

const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []

frm.addEventListener("submit", (ev) => {
  ev.preventDefault()

  const clube = frm.inClube.value
  clubes.push(clube)
  frm.inClube.value = ""
  inClube.focus()

  frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
  if (clubes.length == 0) {
    alert("Não há clubes na lista")
    return
  }
  let lista = ""
  clubes.forEach((clube, i) => lista += `${i + 1}. ${clube}\n`)

  resp.innerText = `Lista de Clubes: \n${"-".repeat(40)}\n${lista}`
})

frm.btMostrar.addEventListener("click", () => {
  if (!(clubes.length % 2 == 0)) {
    alert("O numero de clubes precisa ser par para que a tabela seja feita...")
    return
  }
  const metade = clubes.length / 2
  const tabelaDeJogos = []

  for (let i = 0; i < metade; i++) {
    const clubeCasa = clubes[i]
    const clubeVisitante = clubes[clubes.length - 1 - i]
    tabelaDeJogos.push([clubeCasa, clubeVisitante])
  }

  let lista = ""
  tabelaDeJogos.forEach(clube => lista += `${clube[0]} X ${clube[1]}\n`)
  
  resp.innerText = `Tabela de Jogos:\n${"-".repeat(40)}\n${lista}`
})