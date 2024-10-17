const prompt = require("prompt-sync")();

main()

function main() {
    let win = parseInt(prompt('Digite o seu número de vitórias: '))
    let loss = parseInt(prompt('Digite o seu número de derrotas: '))
    let saldo = saldoVitorias(win, loss)
    let rank = rankCalculator(saldo)
    console.log(`O heroi tem saldo de ${saldo} vitórias e está no nível ${rank}`)
    
}

function saldoVitorias(win, loss) {
    let saldoVitorias = win - loss
    return saldoVitorias
}

function rankCalculator(saldoVitorias) {
    
    let rank

    if (saldoVitorias <= 10) {
        rank = 'Ferro'        
    } else if (saldoVitorias <= 20) {
        rank = 'Bronze'        
    } else if (saldoVitorias <= 50) {
        rank = 'Prata'        
    } else if (saldoVitorias <= 80) {
        rank = 'Ouro'        
    } else if (saldoVitorias <= 90) {
        rank = 'Diamante'        
    } else if (saldoVitorias <= 100) {
        rank = 'Lendário'        
    } else {
        rank = 'Imortal'        
    }

    return rank
}