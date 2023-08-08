const prompt = require("prompt-sync")()                // Adiciona o pacote ao programa
const vehicle = prompt('Veiculo: ')                    // le os dados de entrada
const price = Number(prompt('Preço R$: '))             
const entryValue = price * 0.50                        // calcula valor de entrada
const installment = (price * 0.50) / 12                // ... e das parcelas
console.log(`Promoção: ${vehicle}`)                    // exibe as respostas
console.log(`Entrada de R$: ${entryValue.toFixed(2)}`)
console.log(`+12x de R$ ${installment.toFixed(2)}`)