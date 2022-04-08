const custoProduto = 5
const valorDeVenda = 10
let quantidade = 1000

let custoComImposto = custoProduto * 1.2
let lucro = (valorDeVenda - custoComImposto) * 1000

if (custoProduto <= 0 || valorDeVenda <= 0) {
    console.log ("Erro nos valores de entrada")
} else {
    console.log ("A empresa obteve R$" + lucro + " de lucro com a venda de 1000 produtos")
}




