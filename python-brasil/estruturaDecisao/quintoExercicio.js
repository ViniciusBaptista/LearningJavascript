/**
 * Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
 * A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
 * A mensagem "Reprovado", se a média for menor do que sete;
 * A mensagem "Aprovado com Distinção", se a média for igual a dez.
 */
function media(n1, n2) {
  var m = (n1 + n2) / 2;
  
  if (m >= 7 && m < 10) {
    console.log('Aprovado');
  } else if (m === 10) {
    console.log('Aprovado com distinção');
  } else if (m < 7) {
    console.log('Reprovado')
  }
}
