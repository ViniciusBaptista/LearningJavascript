/**
 * Faça um Programa que pergunte quanto você ganha por hora 
 * e o número de horas trabalhadas no mês. 
 * Calcule e mostre o total do seu salário no referido mês, 
 * sabendo-se que são descontados 11% para o Imposto de Renda, 
 * 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
 */
function salario(horasT, gHoras) {
  var salarioBruto = Math.round(horasT * gHoras),
      IR = (11 / 100) * salarioBruto,
      INSS = (8 / 100) * salarioBruto,
      sindicato = (5 / 100) * salarioBruto,
      salarioLiquido = (salarioBruto - IR - INSS - sindicato);

  return 'Sálario Bruto: R$ ' + salarioBruto + '\n - IR (11%) : R$ ' + IR + '\n - INSS (8%) : R$ ' + INSS + 
    '\n - Sindicato (5%) : R$' + sindicato + '\n Sálario Líquido: R$ ' + salarioLiquido;
}
