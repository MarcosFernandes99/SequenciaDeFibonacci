var numeroEscolha = parseInt(prompt(`Insira aqui o número de início da fibo`))

var arrayFibo = []
arrayFibo[0] = numeroEscolha - 1
arrayFibo[1] = numeroEscolha


for(var contador = 2; contador < 10; contador++){
    arrayFibo[contador] = arrayFibo[contador - 1] + arrayFibo[contador - 2]
}

console.log(arrayFibo)