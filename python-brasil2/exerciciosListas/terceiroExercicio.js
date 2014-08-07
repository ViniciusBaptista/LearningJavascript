// Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

function notas(nota1, nota2, nota3, nota4) {
  var notas = [nota1, nota2, nota3, nota4],
      media = (nota1 + nota2 + nota3 + nota4) / 4;

  return 'Suas notas: ' + notas.join(', ') + '\nSua média: ' + Math.round(media);
}
