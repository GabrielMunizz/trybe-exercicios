/* Faça um algoritmo que calcule a média das 3 notas de uma pessoa estudante e mostre, além do valor da média, uma mensagem de “Aprovação”, caso a média seja igual ou superior a 6, ou a mensagem “Reprovação”,
 caso a média das notas seja inferior a 6. Exiba no seguinte formato:
Aprovação, média: 7 ou Reprovação, média: 5. */

let nota = 5;
if (nota >= 6) {
    console.log('Aprovação, média:', nota);
} else {
    console.log('Reprovação, média:', nota);
}