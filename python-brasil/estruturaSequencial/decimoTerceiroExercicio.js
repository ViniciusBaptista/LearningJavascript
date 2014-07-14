/**
 * Tendo como dados de entrada a altura e o sexo de uma pessoa, 
 * construa um algoritmo que calcule seu peso ideal,
 * utilizando as seguintes fórmulas:
 * 
 * a. Para homens: (72.7*h) - 58
 * b. Para mulheres: (62.1*h) - 44.7 (h = altura)
 * c. Peça o peso da pessoa e informe se ela está dentro, 
 * acima ou abaixo do peso.
 */
function Peso(altura, sexo) {
  this.altura = altura;
  this.sexo = sexo;
}

Peso.prototype.masculino = function() {
  return (72.7 * this.altura) - 58;
}

Peso.prototype.feminino = function() {
  return (62.1 * this.altura) - 44.7;
}
