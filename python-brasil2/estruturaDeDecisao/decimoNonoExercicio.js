/**
 * Faça um Programa que leia um número inteiro menor que 1000 e 
 * imprima a quantidade de centenas, dezenas e unidades do mesmo.
 */
 
function numero(inteiro) {
  var valor = inteiro
              .toString()
              .split('');
 
  switch (valor.length) {
    case 3:
      return valor[0] + ' centenas, ' + valor[1] + ' dezenas e ' + valor[2] + ' unidades';
    case 2:
      return valor[0] + ' dezenas e ' + valor[1] + ' unidades';
    case 1:
      return valor[0] + ' unidades';
    default:
      return 'Valor inválido';
  }
}
