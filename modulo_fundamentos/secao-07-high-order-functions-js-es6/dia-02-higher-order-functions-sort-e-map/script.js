const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui

people.sort((a, b) => b.age - a.age 
)
//console.log(people);

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const marketList = (products, prices) => products.map((product, index) => (
  { [product]: `R$ ${prices[index]}` }
  ));

const newList = marketList(products, prices);
//console.log(newList)

const numbers = [1, 2, 3, 4, 5];
const timesTwo = () => numbers.map((number) => number * 2);
//console.log(timesTwo(numbers));

const strings = ["hello", "world", "javascript"];
const capsLock = () => strings.map((word) => word.toUpperCase());
//console.log(capsLock(strings));

const people2 = [
  { name: "John" },
  { name: "Jane" },
  { name: "Bob" }
];

const onlyNames = () => people2.map((person) => person.name);
//console.log(onlyNames());

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const onlyPairs = numbers2.filter((number) => number % 2 === 0);

const pairsTimesTwo = (pairs) => pairs.map((number) => number * 2);
//console.log(onlyPairs);
//console.log(pairsTimesTwo(onlyPairs));

const fruits = ['banana', 'maçã', 'abacaxi', 'laranja', 'uva'];
const bigWord = fruits.filter((fruit) => fruit.length > 5);
//console.log(bigWord)

const galere = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 20 },
  { nome: 'Ana', idade: 35 }
];

const ereDaGalere = galere.filter((pessoa) => pessoa.idade >= 30);
//console.log(ereDaGalere);
//console.log(ereDaGalere.sort((a, b) => a.name > b.name ? 1 : -1));

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = num.reduce((first, number) => first + number);
console.log(sum);

