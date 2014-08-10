/**
 * Faça um Programa que peça um número correspondente a um
 * determinado ano e em seguida informe se este ano é ou não bissexto.
 */

function bissexto(ano) {
  return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0); 
}
