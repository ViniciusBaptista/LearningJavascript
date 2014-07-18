// Faça um programa que pergunte o preço de três produtos e informe qual
// produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
function comprar(valor1, valor2, valor3) {
  var maisBarato = [valor1, valor2, valor3].sort();

  return 'Produto mais barato custa: R$ ' + maisBarato[0];
}
