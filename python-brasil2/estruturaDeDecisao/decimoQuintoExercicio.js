/**
 * Faça um Programa que peça os 3 lados de um triângulo. O programa 
 * deverá informar se os valores podem ser um triângulo. Indique, 
 * caso os lados formem um triângulo, se o mesmo é: equilátero, 
 * isósceles ou escaleno.
 */
 
function triangulo(a, b, c) {
  if (a === b && b === c) {
    return mensagem('equilátero', a, b, c);
  } else if (a === b || a === c || c === b) {
    return mensagem('isósceles', a, b, c);
  } else {
    return mensagem('escaleno', a, b, c);
  }
}

function mensagem(triangulo, a, b, c) {
  return 'É possível formar um triangulo com ' + a + 
         ', ' + b + ' e ' + 'c' +
         '.\nO triângulo formado é ' + triangulo;
}
