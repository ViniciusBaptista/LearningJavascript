/**
 * Faça um programa para imprimir:
 *    1
 *    1   2
 *    1   2   3
 *    .....
 *    1   2   3   ...  n
 *
 * para um n informado pelo usuário. Use uma função que receba um valor 
 * n inteiro imprima até a n-ésima linha.
 */
function estrutura(n) {
  for (var i = 1; i <= n; i++) {
    var numeros = [];
    for (var x = 1; x <= i; x++) {
      numeros.push(x);
    }
    console.log(numeros.join(' '));
  }
}
