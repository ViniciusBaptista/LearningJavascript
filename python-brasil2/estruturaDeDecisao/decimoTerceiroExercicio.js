/**
 * Faça um Programa que leia um número e exiba o dia correspondente
 * da semana.(1-Domingo, 2-Segunda, etc.), se digitar outro valor
 * deve aparecer valor inválido.
 */

function diasDaSemana(num) {
  var semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dia = num - 1;

  if (num > 7) {
    return 'Valor inválido';
  }

  return semana[dia];
}
