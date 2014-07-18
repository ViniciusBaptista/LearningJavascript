// As Organizações Tabajara resolveram dar um aument de salário aos
// seus colaboradores e lhe contrataram para desenvolver o programa
// que calculará os reajustes.
function tabajara(salario) {
  var percentual,
      valorAumento,
      novoSalario;

  if (salario <= 280) {
    percentual = 0.2;
    valorAumento = Math.round(percentual * salario);
    novoSalario = salario + valorAumento;
  } else if (salario > 280 && salario <= 700) {
    percentual = 0.15;
    valorAumento = Math.round(percentual * salario);
    novoSalario = salario + valorAumento;
  } else if (salario > 700 && salario < 1500) {
    percentual = 0.10;
    valorAumento = Math.round(percentual * salario);
    novoSalario = salario + valorAumento;
  } else if (salario > 1500) {
    percentual = 0.05;
    valorAumento = Math.round(percentual * salario);
    novoSalario = salario + valorAumento;
  }

  return 'Salario: R$ ' + salario + '\nPercentual de aumento: ' +
     (percentual * 100) + '%' + '\nValor de aumento: R$ ' + 
     valorAumento + '\nSalário ajustado: R$ ' + novoSalario;
}
