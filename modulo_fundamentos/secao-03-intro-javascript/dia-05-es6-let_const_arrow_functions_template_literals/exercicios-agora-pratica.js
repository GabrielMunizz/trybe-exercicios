//Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.
//Modifique a variável para que respeite o escopo em que está sendo declarada. Lembre-se: para que a variável respeite o escopo,
//ela não deve ser acessível fora do escopo em que esteja sendo declarada.
//Copie o código a seguir e rode-o para verificar sua saída.
/*function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }    
  }
  imprimeIdade()
*/
//Altere o valor das propriedades do objeto para que respeite as características da variável do tipo const.
// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
/* const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa.nome = 'Luna';
  pessoa.idade = 19;
  
  // Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);
*/
//Modifique a variável para que não ocorra Erro.
//Copie o código a seguir e rode-o para verificar sua saída.
//original
/*
const favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);
//resposta
let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);
*/

//Modifique as concatenações para template literals.
//Copie o código a seguir.
/*const name = 'Adriana';
const lastName = 'Soares';
//console.log('Olá' + ',' + name + ' ' + lastName + '!');
console.log(`Olá, ${name} ${lastName}`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
//console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
console.log(`O resultado da soma de ${a} + ${b} é ${soma(a, b)}`);
*/
//Modifique a estrutura das funções a seguir para que elas sejam arrow functions.
//Transforme a função numeroAleatorio em uma arrow function.

/*function numeroAleatorio() {
    return Math.random()
  }
  console.log(numeroAleatorio());
  */
//Resposta
//const numeroAleatorio = () => Math.random();
//console.log(numeroAleatorio())

//Transforme a função hello em uma arrow function.

/*function hello(nome) {
    return `Olá, ${nome}!`
  }
  let nome = 'Ivan';
  console.log(hello(nome));
*/

//const hello = name => `Olá, ${name}!`
//console.log(hello('Gabriel'));

//Transforme a função nomeCompleto em uma arrow function.

/*function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
  }
  let nome = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));
*/

//const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
//console.log(nomeCompleto('Gabriel', 'Muniz'))

//Altere a expressão if/else utilizando ternary operator.

let speed = 90;
/*const speedCar = (speed) => {
  if (speed >= 120) {
    return `Você ultrapassou o limite de velocidade`;
  } else {
    return `Você está na velocidade permitida`;
  }
};
*/
const speedCar = speed => (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
console.log(speedCar(speed));
