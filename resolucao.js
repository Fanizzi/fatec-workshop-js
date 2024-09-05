/*  Resolução desafio labi9
    Nome: Lorenzo Fanizzi
    2º DSM */

function somar(a, b) {  // Para a função "somar", foi utilizado return para evitar o uso de variáveis globais desnecessáriamente
    return a + b 
}

let x = 5;          // No arquivo anterior, a variável "x" não estava sendo definida.
const y = 5;        // Foi definido "x" como let pois se trata de uma variável que houve uma reatribuição.
x = x + 10;         // A variável "y" foi definida como const para não haver reatribuição. 

console.log(somar(x, y));