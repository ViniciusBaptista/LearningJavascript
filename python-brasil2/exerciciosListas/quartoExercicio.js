/**
 * Faça um Programa que leia um vetor de 10 caracteres, e diga quantas 
 * consoantes foram lidas. Imprima as consoantes.
 */
 
function caracteres() {
  var vogais = [],
      consoantes = [];

  for (var i = 0; i < 10; i++) {
    'aeiou'.indexOf(arguments[i]) >= 0 ? vogais.push(arguments[i]) : consoantes.push(arguments[i]);
  }

  return 'Você digitou: ' + consoantes.length + ' consoantes' +
         '\nConsoantes: ' + consoantes;
}
