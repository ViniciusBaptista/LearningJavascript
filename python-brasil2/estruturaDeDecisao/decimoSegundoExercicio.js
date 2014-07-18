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
function pagamento(ganhoHora, hTrabalhadas) {
  var salarioBruto = (ganhoHora * hTrabalhadas),
      inss = salarioBruto * 0.10,
      fgts = salarioBruto * 0.11,
      ir = 0,
      impostoIr;

  if (salarioBruto > 900 && salarioBruto <= 1500) {
    ir = 0.05;
    impostoIr = salarioBruto * ir;
  } else if (salarioBruto > 1500 && salarioBruto <= 2500) {
    ir = 0.10;
    impostoIr = salarioBruto * ir;
  } else if (salarioBruto > 2500) {
    ir = 0.20;
    impostoIr = salarioBruto * ir;
  }

  return 'Salário Bruto: R$ ' + salarioBruto + '\n(-) IR('+ ir * 100 + '%): R$ ' + impostoIr +
    '\n(-) INSS (10%): R$ ' + inss + '\nFGTS (11%): R$ ' + fgts +
    '\nTotal de descontos: R$ ' + (impostoIr + inss) + '\nSalário Líquido: R$ ' + (salarioBruto - (inss + impostoIr));  
}
