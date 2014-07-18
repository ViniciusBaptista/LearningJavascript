/**
 * Faça um Programa que peça os 3 lados de um triângulo. O programa 
 * deverá informar se os valores podem ser um triângulo. Indique, 
 * caso os lados formem um triângulo, se o mesmo é: equilátero, 
 * isósceles ou escaleno.
 */
function triangulo(a,b,c) {
  
  if (a === b && b === c) {
    return 'É possivel fomar um triângulo com: ' + a + ', ' + b + ', ' + c + '\nO triângulo formado é Equilátero';
  } else if (a === b || a === c || c === b) {
    return 'É possivel fomar um triângulo com: ' + a + ', ' + b + ', ' + c + '\nO triângulo formado é Isóceles';
  } else {
    return 'É possivel fomar um triângulo com: ' + a + ', ' + b + ', ' + c + '\nO triângulo formado é Escaleno';
  }
}
