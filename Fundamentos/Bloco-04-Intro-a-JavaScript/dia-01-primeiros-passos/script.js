let salbruto = 5000
let valinss;
let valir

if (salbruto <= 1556.94) {
    valinss = (salbruto * 0.08)
} else if (salbruto <= 2594.92 ) {
    valinss = (salbruto * 0.09)
} else if (salbruto <= 5189.82) {
    valinss = (salbruto * 0.11)
} else {
    valinss = 570.88
}

const salbase = salbruto - valinss;

if (salbase <= 1903.98) {
    valir = 0
} else if (salbase <= 2826.65) {
    valir = (0.075 * salbase) - 142.80
} else if (salbase <= 3751.05) {
    valir = (0.15 * salbase) - 354.80
} else if (salbase <= 4664.68) {
    valir = (0.225 * salbase) - 636.13
} else {
    valir = (0.275 * salbase) - 869.36
}

console.log ("O seu salário é de: R$" + (salbase - valir))
