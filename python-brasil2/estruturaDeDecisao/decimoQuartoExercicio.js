/**
 * Faça um programa que lê as duas notas parciais obtidas por um
 * aluno numa disciplina ao longo de um semestre, e calcule a sua 
 * média.
 *
 * Média de Aproveitamento  Conceito
 * Entre 9.0 e 10.0        A
 * Entre 7.5 e 9.0         B
 * Entre 6.0 e 7.5         C
 * Entre 4.0 e 6.0         D
 * Entre 4.0 e zero        E
 *
 * O algoritmo deve mostrar na tela as notas, a média, 
 * o conceito correspondente e a mensagem “APROVADO” se o 
 * conceito for A, B ou C ou “REPROVADO” se o conceito for 
 * D ou E.
 */

function nota(nota1, nota2) {
  var media = (nota1 + nota2) / 2,
      conceito,
      situacao;

  switch (true) {
    case media >= 9:
      conceito = 'A';
      break;
    case media >= 7.5 && media < 9:
      conceito = 'B'
      break;
    case media >= 6 && media < 7.5:
      conceito = 'C'
      break;
    case media >= 4 && media < 6:
      conceito = 'D'
      break;
    case media >= 0 && media < 4:
      conceito = 'E' 
      break; 
    default:
      return 'Nota inválida!';
  }

  if (conceito === 'A' || conceito === 'B' || conceito === 'C') {
    situacao = 'Aprovado!';
  } else {
    situacao = 'Reprovado!';
  }
  
  return 'As notas do aluno: ' + nota1 + ', ' + nota2 + '\nA média do aluno é: ' + media +
    '\nConceito: ' + conceito + '\n' + situacao;
}
