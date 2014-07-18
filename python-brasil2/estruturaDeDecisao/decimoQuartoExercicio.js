// Faça um programa que lê as duas notas parciais obtidas por um
// aluno numa disciplina ao longo de um semestre, e calcule a sua 
// média.
function nota(nota1, nota2) {
  var media = (nota1 + nota2) / 2,
      conceito,
      situacao;

  if (media >= 9) {
    conceito = 'A';
  } else if (media >= 7.5 && media < 9) {
    conceito = 'B';
  } else if (media >= 6 && media < 7.5) {
    conceito = 'C';
  } else if (media >= 4 && media < 6) {
    conceito = 'D';
  } else if (media >= 0 && media < 4) {
    conceito = 'E'
  }

  if (conceito === 'A' || conceito === 'B' || conceito === 'C') {
    situacao = 'Aprovado!';
  } else {
    situacao = 'Reprovado!';
  }
  
  return 'As notas do aluno: ' + nota1 + ', ' + nota2 + '\nA média do aluno é: ' + media +
    '\nConceito: ' + conceito + '\n' + situacao;
}
