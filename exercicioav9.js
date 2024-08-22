function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}
function soma(a, b) {
    return a + b;
}

function multiplicacao(a, b) {
    return a * b;
}
var resultadoSoma = executaOperacao(5, 3, soma);
console.log("Resultado da soma: ", resultadoSoma);  
var resultadoMultiplicacao = executaOperacao(4, 6, multiplicacao);
console.log("Resultado da multiplicação: ", resultadoMultiplicacao);  
function repetirOperacao(num, operacao) {
    let resultado = 0;
    for (let i = 0; i < num; i++) {
        resultado = operacao(resultado);
        console.log(`Resultado após ${i + 1} iterações: ${resultado}`);
    }
}
function adicionar2(valor) {
    return valor + 2;
}
repetirOperacao(5, adicionar2);  
function contarOcorrencias(string, caractere) {
    let contagem = 0;
    [...string].forEach(c => {
        if (c === caractere) {
            contagem++;
        }
    });
    return contagem;
}
var ocorrencias = contarOcorrencias("exemplo de string", "e");
console.log("Número de ocorrências do caractere 'e': ", ocorrencias);
