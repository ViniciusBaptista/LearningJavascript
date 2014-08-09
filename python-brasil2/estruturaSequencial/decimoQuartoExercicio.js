/**
 * João Papo-de-Pescador, homem de bem, comprou um microcomputador para
 * controlar o rendimento diário de seu trabalho. Toda vez que ele traz
 * um peso de peixes maior que o estabelecido pelo regulamento de pesca
 * do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 
 * por quilo excedente. João precisa que você faça um programa que leia
 * a variável peso (peso de peixes) e verifique ser há excesso. Se houver,
 * gravar na variável excesso e na variável multa o valor da multa que
 * João deverá pagar. Caso contrário mostrar tais variáveis com o
 * conteúdo ZERO.
 */
 
function pescador(quilos) {
  var pesoExcedente = 0,
      multa = 0;

  if (quilos > 50) {
    pesoExcedente = quilos - 50;
    multa = pesoExcedente * 4;
    return 'Peso excedente: ' + pesoExcedente + ' kg' + '\nValor da multa: R$ ' + multa;
  } else {
    return 'Peso excedente: ' + pesoExcedente + ' kg' + '\nValor da multa: R$ ' + multa;
  }
}
