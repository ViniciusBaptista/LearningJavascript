/**
 * Faça um programa para o cálculo de uma folha de pagamento, 
 * sabendo que os descontos são do Imposto de Renda, que depende do 
 * salário bruto (conforme tabela abaixo) e 3% para o Sindicato e 
 * que o FGTS corresponde a 11% do Salário Bruto, mas não é 
 * descontado (é a empresa que deposita). O Salário Líquido 
 * corresponde ao Salário Bruto menos os descontos. O programa 
 * deverá pedir ao usuário o valor da sua hora e a quantidade de 
 * horas trabalhadas no mês.
 */
 
function pagamento(ganhoHora, horasTrabalhadas) {
  var salarioBruto = (ganhoHora * horasTrabalhadas);
      
  if (salarioBruto > 900 && salarioBruto <= 1500) {
    return atribuicao(salarioBruto, 0.05);
  } else if (salarioBruto > 1500 && salarioBruto <= 2500) {
    return atribuicao(salarioBruto, 0.1);
  } else if (salarioBruto > 2500) {
    return atribuicaio(salarioBruto, 0.2);
  }
}

function atribuicao(salarioBruto, ir) {
  var inss = salarioBruto * 0.10,
      fgts = salarioBruto * 0.11,
      impostoDeRenda = salarioBruto * ir;
      
  return 'Salário Bruto: R$ ' + salarioBruto + 
         '\n(-) IR('+ ir * 100 + '%): R$ ' + impostoDeRenda +
         '\n(-) INSS (10%): R$ ' + inss + 
         '\nFGTS (11%): R$ ' + fgts +
         '\nTotal de descontos: R$ ' + (impostoDeRenda + inss) + 
         '\nSalário Líquido: R$ ' + (salarioBruto - (inss + impostoDeRenda));
}
