// Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.
function vetor() {
  var inteiro = [];

  for (var i = 0; i < 5; i++) {
    inteiro.push(arguments[i]);
  }

  return inteiro.join(', ');
}
