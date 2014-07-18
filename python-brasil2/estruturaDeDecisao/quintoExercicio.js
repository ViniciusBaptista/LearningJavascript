/**
 * Faça um programa para a leitura de duas notas parciais de um aluno. 
 * O programa deve calcular a média alcançada por aluno e apresentar:
 * A mensagem "Aprovado", se a média alcançada for maior ou igual a 
 * sete;
 * A mensagem "Reprovado", se a média for menor do que sete;
 * A mensagem "Aprovado com Distinção", se a média for igual a dez
 */
function notas(nota1, nota2) {
  var media = (nota1 + nota2) / 2;

  if (media >= 7 && media < 10) {
    return 'Aprovado';
  } else if (media < 7) {
    return 'Reprovado';
  } else if (media === 10) {
    return 'Aprovado com Distinção'
  }
}
