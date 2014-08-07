/**
 * Faça um Programa que leia um vetor de 10 números reais e mostre-os
 * na ordem inversa.
 */

function vetor() {
  var reais = [];

  for (var i = 0; i < 10; i++) {
    reais.push(arguments[i]);
  }

  return reais.reverse().join(', ');
}
