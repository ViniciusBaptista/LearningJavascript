/**
 * Faça um Programa que pergunte em que turno você estuda. Peça para 
 * digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem 
 * "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", 
 * conforme o caso.
 */

function estudar(turno) {
  var lower = turno.toLowerCase();
  
  switch (lower) {
    case 'm':
      return 'Bom dia!';
    case 'v':
      return 'Boa tarde!';
    case 'n':
      return 'Boa noite!';
    default:
      return 'Valor inválido';
  }
}
