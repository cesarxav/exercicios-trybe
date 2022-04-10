//Maneira que eu fiz
let numbers = [200, 105, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

    for (i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > maiorNumero) {
            maiorNumero = numbers[i]
        }
    }

    console.log(maiorNumero)

/* - Maneira como o exercício mostrou no gabarito para corrigir o erro de que a variável Maior Número não pode ser maior que nenhum valor dentro do array ! 4

let numbers = [200, 105, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0]

    for (i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > maiorNumero) {
            maiorNumero = numbers[i]
        }
    }

    console.log(maiorNumero)
        */
