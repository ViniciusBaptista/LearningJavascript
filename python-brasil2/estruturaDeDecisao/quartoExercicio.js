// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

function verificacao(letra) {
  var lower = letra.toLowerCase();
  return 'aeiou'.indexOf(lower) >= 0 ? 'Vogal' : 'Consoante';
}
