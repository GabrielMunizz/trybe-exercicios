/* Crie um algoritmo que recebe a idade de Marina, Silvia e Iza e imprime quem é a mais nova. Exiba no seguinte formato:
"Pessoa" é a mais nova. */
let marina = 25;
let silvia = 50;
let iza = 18;
if (marina < silvia && marina < iza) {
    console.log("Marina é a pessoa mais nova");
} else if (silvia < marina && silvia < iza) {
    console.log('Silvia é a pessoa mais nova');
} else {
    console.log("Iza é a pessoa mais nova");
}