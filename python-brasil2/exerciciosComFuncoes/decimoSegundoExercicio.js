/**
 * Embaralha palavra. Construa uma função que receba uma string como 
 * parâmetro e devolva outra string com os carateres embaralhados. 
 * Por exemplo: se função receber a palavra python, pode retornar 
 * npthyo, ophtyn ou qualquer outra combinação possível, de forma 
 * aleatória. Padronize em sua função que todos os caracteres serão 
 * devolvidos em caixa alta ou caixa baixa, independentemente de como 
 * foram digitados.
 */
<<<<<<< HEAD

=======
>>>>>>> 070b3a8dc762340472f43e5e71f558e1a7363ee3
function shuffle(text) {
  return text.split('').sort(function() {
    return 0.5 - Math.random();
  }).join('');
}
