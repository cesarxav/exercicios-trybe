// baseado no exercício de encontrar o maior número !
let numbers = [1, 200, 105, 9, 3, 19, 70, 8, 100, 2, 35, 27, 13];
let menorNumero = numbers[0]

    for (i = 1; i < numbers.length; i += 1) {
        if (numbers[i] < menorNumero) {
            menorNumero = numbers[i]
        }

       }
       console.log (menorNumero)
    