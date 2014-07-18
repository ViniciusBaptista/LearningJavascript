// Faça um Programa que verifique se uma letra digitada é 'F' ou 'M'. 
// Conforme a letra escrever: F - Feminino, M - Masculino, Sexo inválido.
function verifique(sexo) {
  var lower = sexo.toLowerCase();

  if (lower === 'm') {
    return 'Masculino';
  } else if (lower === 'f') {
    return 'Feminino';
  } else {
    return 'Sexo inválido';
  }
}
