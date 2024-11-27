/*
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

/*
O código abaixo resolve o desafio 2. Contudo não trata algumas coisas que poderia, como se ele tem 
mais derrotas que vitórias, ou se o saldo é de vitórias ou derrotas

let winBalance = balance(1000000, 0)
let rank = ""

function balance(win, loss){
    return balance = win-loss
}

function rankValidator(){
    if (winBalance<=10){
        rank = "Ferro"
    } else if (winBalance<=20){
        rank = "Bronze"
    } else if (winBalance<=50){
        rank = "Prata"
    } else if (winBalance<=80){
        rank = "Ouro"
    } else if (winBalance<=90){
        rank = "Diamante"
    } else if (winBalance<=100){
        rank = "Lendário"
    } else if (winBalance>=101){
        rank = "Imortal"
    }
    return rank
}

console.log("O herói tem saldo de Vitórias de " + winBalance + ", e está no nível " + rankValidator())

*/
let win = 34
let loss = 12
let winBalance = balance(win, loss)
let rank = ""

function balance(win, loss){
    return balance = win-loss
}

function rankValidator(){
    if (winBalance<=10){
        rank = "Ferro"
    } else if (winBalance<=20){
        rank = "Bronze"
    } else if (winBalance<=50){
        rank = "Prata"
    } else if (winBalance<=80){
        rank = "Ouro"
    } else if (winBalance<=90){
        rank = "Diamante"
    } else if (winBalance<=100){
        rank = "Lendário"
    } else if (winBalance>=101){
        rank = "Imortal"
    }
    return rank
}


if (winBalance<0){
    console.log("O herói tem saldo de " + (-(winBalance)) + " Derrotas, e está no rank " + rankValidator())
    console.log("Vitórias: " + win)
    console.log("Derrotas: " + loss)

} else {
    console.log("O herói tem saldo de " + winBalance + " Vitórias, e está no rank " + rankValidator())
    console.log("Vitórias: " + win)
    console.log("Derrotas: " + loss)
}