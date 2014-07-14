/**
 * Faça um Programa que peça 2 números inteiros e um número real. 
 * Calcule e mostre:
 * a. produto do dobro do primeiro com metade do segundo .
 * b. a soma do triplo do primeiro com o terceiro.
 * c. o terceiro elevado ao cubo.
 */
function Calc(numI1, numI2, numR) {
  this.numI1 = numI1;
  this.numI2 = numI2;
  this.numR = numR;
}

Calc.prototype.produto = function() {
  return (this.numI1 * 2) + (this.numI2 / 2);
}

Calc.prototype.soma = function() {
  return ((this.numI1 * 3) + (this.numR));
}

Calc.prototype.cubo = function() {
  return Math.pow(this.numR, 3);
}
