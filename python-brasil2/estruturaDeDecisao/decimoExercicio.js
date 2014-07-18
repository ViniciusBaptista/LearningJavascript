/**
 * Faça um Programa que pergunte em que turno você estuda. Peça para 
 * digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem 
 * "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", 
 * conforme o caso.
 */
function estudar(turno) {
  var lower = turno.toLowerCase();
  
  if (lower === 'm') {
    return 'Bom dia!';
  } else if (lower === 'v') {
    return 'Boa Tarde!';
  } else if (lower === 'n') {
    return 'Boa Noite!';
  } else {
    return 'Valor Inválido';
  }
}
