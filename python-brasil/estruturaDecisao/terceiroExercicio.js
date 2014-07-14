/**
 * Faça um Programa que verifique se uma letra digitada é "F" ou "M".
 * Conforme a letra escrever: F - Feminino, M - Masculino,
 * Sexo Inválido.
 */
function verifique(sexo) {
  var lower = sexo.toLowerCase();
  
  if (lower === 'm') {
    console.log('Masculino');
  } else if (lower === 'f') {
    console.log('Feminino');
  } else {
    console.log('Sexo Inválido')
  }
}
