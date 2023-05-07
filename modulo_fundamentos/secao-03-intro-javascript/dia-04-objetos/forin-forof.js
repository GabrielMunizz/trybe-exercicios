//Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let i in names) {
    console.log('Olá, ' + names[i]);
  }

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let i in car) {
    console.log(i + ': ' + car[i])
  }

//Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? 
//Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.
let newStudent = {};
function addProperty(object, key, value) {
    return object[key] = value;
}
let newKey = 'name';
let name = 'Gabriel';
addProperty(newStudent, newKey, name);
newKey = 'lastName';
let lastName = 'Muniz';
addProperty(newStudent, newKey, lastName)
console.log(newStudent);
newKey = 'eMail';
let eMail = 'chabalala@gmail.com';
addProperty(newStudent, newKey, eMail);
console.log(newStudent)
newKey = 'age';
let age = 34;
addProperty(newStudent, newKey, age);
console.log(newStudent)