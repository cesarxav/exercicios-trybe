const anguloA = -23
const anguloB = 98
const anguloC = 50
let soma = (anguloA + anguloB + anguloC)
let positivos = anguloA > 0 && anguloB > 0 && anguloC > 0
if (positivos) {
    if (soma == 180) {
    console.log (true)
} else { 
    console.log (false)
 }; 
} else {
    console.log ("Não é um ângulo válido")
}