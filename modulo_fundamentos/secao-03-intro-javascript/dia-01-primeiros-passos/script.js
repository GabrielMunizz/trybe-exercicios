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
//Exercicio 5 Operadores Lógicos
let currentHour = 5;
let message = '';
if (currentHour >= 22) {
    message = 'Não deveriamos comer nada, é hora de dormir';
    console.log(message);
} else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar =D';
    console.log(message);
} else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
    console.log(message);
} else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!';
    console.log(message);
} else {
    message = 'Hmmm, cheiro de café recém-passado';
    console.log(message);
}

