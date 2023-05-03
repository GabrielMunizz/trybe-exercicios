let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Condição 1: Percorra o array imprimindo todos os valores contidos nele com a função console.log().

/*for(let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i])
}
*/

//Condição 2: Some todos os valores contidos no array e imprima o resultado.

/*let soma = 0;
for(let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];    
}
console.log(soma); */

//Condição 3: Calcule e imprima a média aritmética dos valores contidos no array.
//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

/*let soma = 0;
for(let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}
let media = soma / numbers.length
console.log(media);*/

//Condição 4:Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20,
//imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

/*let soma = 0;
for(let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}
let media = soma / numbers.length
console.log(media);

if (media > 20) {
    console.log("O valor da média aritmética é maior que 20")
} else {
    console.log('O valor da média aritmética é menor que 20');
}*/

//Condição 5: Utilizando for, descubra o maior valor contido no array e imprima-o.

/*let biggestNumber = 0;
for(let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > biggestNumber) {
        biggestNumber = numbers[i];
    };
}
console.log(biggestNumber); */

//Condição 6: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
/*
let oddNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i])
    }
}
if (oddNumbers.length > 0) {
    console.log(oddNumbers.length)
} else {
    console.log("Nenhum valor ímpar encontrado");
}*/

//Condição 7: Utilizando for, descubra o menor valor contido no array e imprima-o.

/*let smallestNumber = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i]
    }
}
console.log(smallestNumber);*/

//Condição 8: Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

/*let arr = [];
for (let i = 1; i <= 25; i += 1) {
    arr.push(i);
}
console.log(arr);
*/ 

//Condição 9: Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
let arr = [];
for (let i = 1; i <= 25; i += 1) {
    arr.push(i/2);
}
console.log(arr)
