// Faça um Programa que leia três números e mostre o maior e o menor deles.

function verifique(n1, n2, n3) {
  var numbers = [n1, n2, n3].sort();

  return (numbers[0]+ ', ' + numbers[2]);
}
