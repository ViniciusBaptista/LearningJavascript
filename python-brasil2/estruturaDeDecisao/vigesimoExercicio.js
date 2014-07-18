/**
 * Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e presentar:
 * a. A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
 * b. A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
 * c. A mensagem "Aprovado com Distinção", se a média for igual a 10.
 */
function mediaEscolar(nota1, nota2, nota3) {
  var media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7 && media < 10) {
    return 'Aprovado!' + '\nMédia Alcançada: ' + media;
  } else if (media < 7) {
    return 'Reprovado!' + '\nMédia Alcançada: ' + media;
  } else if (media === 10) {
    return 'Aprovado com Distinção' + '\nMédia Alcançada: ' + media;
  }
}
