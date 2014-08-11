/**
 * Faça um Programa que verifique se uma letra digitada é 'F' ou 'M'. 
 * Conforme a letra escrever: F - Feminino, M - Masculino, Sexo inválido.
 */

function verifique(sexo) {
  var lower = sexo.toLowerCase();
  
  switch (lower) {
    case 'm':
      return 'Masculino';
    case 'f':
      return 'Feminino';
    default:
      return 'Sexo inválido';
  }
}