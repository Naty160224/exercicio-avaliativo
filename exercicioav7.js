function soma(a, b) {
    return a + b;
}
var resultadoSoma = soma(3, 4);
console.log(resultadoSoma);  
function ehPar(numero) {
    return numero % 2 === 0;
}
var resultadoEhPar = ehPar(10);
console.log(resultadoEhPar); 
var resultadoEhPar2 = ehPar(7);
console.log(resultadoEhPar2); 
function dobraValores(array) {
    return array.map(function(valor) {
        return valor * 2;
    });
}
const numeros = [1, 2, 3, 4, 5];
const resultadoDobra = dobraValores(numeros);
console.log(resultadoDobra);
function contaCaracteres(string) {
    return string.length;
}
var resultadoContagem = contaCaracteres("Olá, mundo!");
console.log(resultadoContagem); 
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
var resultadoFatorial = fatorial(5);
console.log(resultadoFatorial);  
