/**
 * As Organizações Tabajara resolveram dar um aumento de salário aos
 * seus colaboradores e lhe contrataram para desenvolver o programa
 * que calculará os reajustes.
 */
 
function tabajara(salario) {
  if (salario <= 280) {
    return atribuicao(salario, 0.2);
  } else if (salario > 280 && salario <= 700) {
    return atribuicao(salario, 0.15);
  } else if (salario > 700 && salario < 1500) {
    return atribuicao(salario, 0.10);
  } else if (salario > 1500) {
    return atribuicao(salario, 0.5);
  }
}

function atribuicao(salario, percentual) {
  var valorAumento = Math.round(percentual * salario),
      novoSalario = salario + valorAumento;

  return 'Salário: R$ ' + salario +
         '\nPercentual de aumento: ' + (percentual * 100) + '%' +
         '\nValor de aumento: R$ ' + valorAumento +
         '\nSalário ajustado: R$ ' + novoSalario;
}
