/**
 * Faça um programa que calcule as raízes de uma equação do segundo
 * grau, na forma ax2 + bx + c. O programa deverá pedir os valores 
 * de a, b e c e fazer as consistências, informando ao usuário nas 
 * seguintes situações:
 * 
 * a. Se o usuário informar o valor de A igual a zero, a equação não é 
 * do segundo grau e o programa não deve fazer pedir os demais 
 * valores, sendo encerrado;
 * b. Se o delta calculado for negativo, a equação não possui raizes 
 * reais. Informe ao usuário e encerre o programa;
 * c.Se o delta calculado for igual a zero a equação possui apenas 
 * uma raiz real; informe-a ao usuário;
 * d.Se o delta for positivo, a equação possui duas raiz reais; 
 * informe-as ao usuário;
 */
 
function equacao(a, b, c) {
  var delta = (Math.pow(b, 2) - (4 * a * c)),
      message,
      raiz1,
      raiz2;

  if (a === 0) {
    return 'Não é uma equação do segundo grau';
  } else if (delta < 0) {
    return 'Delta = ' + delta + '\nA equação não possui uma raiz real';
  } else if (delta === 0) {
    message = 'Delta = ' + delta + '\nA equação possui uma raiz';
    raiz1 = ((-1) * b + Math.sqrt(delta)) / (2 * a);
    return message + '\nRaiz da Equação: ' + raiz1;
  } else if (delta > 0) {
    message = 'Delta = ' + delta + '\nA equação possui duas raizes';
    raiz1 = ((-1) * b + Math.sqrt(delta)) / (2 * a);
    raiz2 = ((-1) * b - Math.sqrt(delta)) / (2 * a);
    return message + '\nRaiz 1 da Equação: ' + raiz1 + '\nRaiz 2 Equação: ' + raiz2;
  }
}
