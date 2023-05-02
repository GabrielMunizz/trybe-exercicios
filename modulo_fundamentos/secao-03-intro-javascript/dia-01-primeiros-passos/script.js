// Exercicio numero 1 Variaveis:

let myName = 'Gabriel Muniz';
let birthCity = 'Niterói';
let birthYear = 1988;
//console.log(myName, birthCity, birthYear);

// Exercicio numero 2 Tipos primitivos, tipagem dinamica: // 

let patientId = 50;
let isEnrolled = true;
let patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
let patientEmail = 'ana@email.com';

//console.log(typeof patientId);

//Exercicio 3 para fixar Operadores :
let base = 5;
let height = 8;
let area = base * height;
let perimeter = 2*(base + height);
console.log(perimeter);

//Exercicio 4 para fixar If e Else
let notaCandidato = 77.5;
if (notaCandidato >= 80) {
    console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');

} else if (notaCandidato <= 80 && notaCandidato >= 60) {
    console.log('Você está na nossa lista de espera');

} else {
    console.log('Infelizmente, você reprovou');
}

