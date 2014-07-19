/**
 * Faça um programa com uma função chamada somaImposto. A função possui
 * dois parâmetros formais: taxaImposto, que é a quantia de taxaImposto
 * sobre vendas expressa em porcentagem e custo, que é o custo de um 
 * item antes do imposto. A função 'altera' o valor de custo para incluir
 * o imposto sobre as vendas.
 */
function somaImposto(taxaImposto, custo) {
  var taxa = custo + custo * (taxaImposto / 100);
  return 'Valor de custo com imposto: R$ ' + taxa;
}
