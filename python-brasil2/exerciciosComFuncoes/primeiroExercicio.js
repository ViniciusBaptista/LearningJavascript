/**
 * Faça um programa para imprimir:
 * 1
 * 2   2
 * 3   3   3
 * .....
 * n   n   n   n   n   n  ... n
 *
 * para um n informado pelo usuário. Use uma função que receba um
 * valor n inteiro e imprima até a n-ésima linha.
 */
function estrutura(n) {
  var escada = '';
  for (var i = 0; i <= n; i++) {
    var numeros = [];

    for (var x = 0; x < i; x++) {
      numeros.push(i);
    }
    escada += numeros.join(' ') + '\n';
  }
  return escada;
}
