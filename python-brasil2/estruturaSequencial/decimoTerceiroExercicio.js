/**
 * Tendo como dados de entrada a altura e sexo de uma pessoa, construa
 * um algoritmo que calcule seu peso ideal, utilizando as seguintes
 * fórmulas:
 *
 * a. Para homens: (72.2*h) - 58
 * b. Para mulheres: (62.1*h) - 44.7 (h = altura)
 * c. Peça o peso da pessa e informe se ela está dentro, acima 
 * ou abaixo do peso.
 */
function pesoIdeal(altura, sexo) {
  var lower = sexo.toLowerCase();

  if (lower === 'm') {
    return 'Seu peso ideal: ' + Math.round((72.2 * altura) - 58) + ' kg';
  } else if (lower === 'f') {
    return 'Seu peso ideal: ' + Math.round((62.1 * altura) - 44.7) + ' kg';
  }
}
