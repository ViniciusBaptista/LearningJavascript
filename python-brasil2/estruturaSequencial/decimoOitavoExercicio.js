/**
 * Faça um programa que peça o tamanho de um arquivo para download (em MB)
 * e a velocidade de um link de Internet (em Mbps), calcule e informe o
 * tempo aproximado de download do arquivo usando este link (em minutos).
 */
 
function download(arquivo, velocidade) {
  var tempo = arquivo / (velocidade * 60);
  
  if (tempo < 1) {
    return 'Download sera concluido em menos de 1 minuto'
  } else {
    return 'Tempo de download: ' + Math.round(tempo) + ' minutos';
  }
}
