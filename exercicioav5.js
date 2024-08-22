const numeros = [10, 20, 30, 40, 50];
console.log(numeros);

numeros.push(60);
console.log(numeros);
var removido = numeros.pop();
console.log(removido);
console.log(numeros);
numeros.splice(2, 1);
console.log(numeros);
numeros.sort(function(a, b) {
    return b - a;
});
console.log(numeros);
