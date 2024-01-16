let inputValorConta = document.querySelector("#valorConta");
let inputQualidade = document.querySelector("#qualidade");
let inputValorGorjeta = document.querySelector("#valorGorjeta");
let inputValorTotal = document.querySelector("#valorTotal");
let botao = document.querySelector(".botao");

botao.addEventListener("click", somarValorComQualidade);

function somarValorComQualidade(){

    let valorConta = Number(inputValorConta.value)
    let valorQualidadeServico = inputQualidade.value

    let porcentagemQualidadeServico = valorConta * (valorQualidadeServico / 100)
    let valorPorcentagem = Number(porcentagemQualidadeServico.toFixed(2))

    let valorGorjeta = `R$${valorPorcentagem}`

    let valorTotal = `R$${valorConta + valorPorcentagem}`

    inputValorGorjeta.value = valorGorjeta
    inputValorTotal.value = valorTotal
}