/**
 * Faça um Programa que peça 2 números inteiro e um número real. Calcule e mostre:
 *
 * a. o produto do dobro do primeiro com metade do segundo.
 * b. a soma do triplo do primeiro com o terceiro.
 * c. o terceiro elevado ao cubo.
 */
 
function calculo(a, b, c) {
  var produto = (a * 2) + (b / 2),
      soma = (a * 3) + c,
      cubo = Math.pow(c, 3);

  return 'a. ' + produto + '\nb. ' + soma + '\nc. ' + cubo;
}
