// Faça um Programa que leia um número inteiro menor que 1000 e 
// imprima a quantidade de centenas, dezenas e unidades do mesmo.
function numero(inteiro) {
  
  var str = numero.toString().split('');

  if (str.length === 3) {
    return str[0] + ' centenas, ' + str[1] + ' dezenas e ' + str[2] + ' unidades';
  } else if (str.length === 2) {
    return str[0] + ' dezenas e ' + str[1] + ' unidades'
  } else if (str.length === 1) {
    return str[0] + ' unidades';
  }
}
