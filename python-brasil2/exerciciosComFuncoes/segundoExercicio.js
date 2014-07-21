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
  var escada = '';

  for (var i = 0; i <= n; i++) {
    var numeros = [];
   
    for (var x = 1; x <= i; x++) {
      numeros.push(x);
    }
   
    escada += numeros.join(' ') + '\n';
  }

  return escada
}
