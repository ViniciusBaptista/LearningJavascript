// Faça um Programa que leia 20 números inteiros e armazene-os num
// vetor. Armazene os números pares no vetor PAR e os números IMPARES
// no vetor impar. Imprima os três vetores.
function vetor() {
  var numeros = [],
      par = [],
      impar = [];

  for (var i = 0; i < 20; i++) {
    arguments[i] % 2 === 0 ? par.push(arguments[i]) : impar.push(arguments[i]);
    numeros.push(arguments[i]);
  }

  return 'Números: '+ numeros + 
         '\nPares: ' + par.join(', ') + 
         '\nImpar: ' + impar.join(', ');
}
