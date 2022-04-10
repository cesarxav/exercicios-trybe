//Maneira que eu fiz
let numbers = [200, 105, 9, 3, 19, 70, 8, 100, 2, 35, 27, 13];
let quantosImpares = 0

    for (i = 0; i < numbers.length; i += 1) {
        if (numbers[i] % 2 !== 0) {
        quantosImpares += 1 
        }
    }

    if (quantosImpares == 0) {
        console.log ("Não há numeros ímpares")
    } else {
        console.log ("São " + quantosImpares + " números ímpares")
    }