/* Você foi jantar em um restaurante chique, em uma cidade turística. O prato que você pediu custou R$100,00. Porém o restaurante possui uma taxa de 10% sobre o valor da conta por ser um lugar turístico.
Crie uma solução para calcular o valor final da conta sendo que você também quis dar 5% de gorjeta para a pessoa que lhe atendeu. */
let custoPrato = 100.00;
let taxa = 0.1;
let gorjeta = 0.05;
let conta = (custoPrato*taxa) + (custoPrato*gorjeta) + custoPrato;
console.log(conta);