// Nova pessoa contratada
/*const newPerson = (name, lastName) => [{
  nomeCompleto: name, 
  email: `${name.toLowerCase()}_${lastName.toLowerCase()}@trybe.com`
}];

const newEmployees = (person) => {
  const employees = {
    id1: person('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: person('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: person('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }  
  return employees;
};
console.log(newEmployees(newPerson));*/

//Sorteador de loteria
/*
const randomNumber = () => Math.floor(Math.random() * 5) + 1;


const lotteryAlg = (number, randomNumber) => {
  if (number === randomNumber) {
    return `Parabéns! Você acertou! O número é ${number}`
  }
  return 'Tente novamente';
}

console.log(lotteryAlg(2, randomNumber())); */

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
const authorBirth = (year) => {
  const book = books.find((book) => {
    return book
      .author
        .birthYear === year;
  })
  if (book) {
    return book.author.name
  }
  return 'Autor não encontrado'
}
//console.log(authorBirth(1947))
const smallerName = () => {
  let nameBook;  
  books.forEach((book) => {  
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name
    }
  })
  return nameBook
}
//console.log(smallerName())
const charFinder = (number) => {
  const charNumber = number;
  return books.find((book) => {
    return book.name.length === number;
  })
}
//console.log(charFinder(26));
const sameCenturyAuthors = (booksObj) => {
  return books.every((book) => {
    return book.author.birthYear >= 1900 && book.author.birthYear <= 2000;
  })
}
//console.log(sameCenturyAuthors());
const bookRelease = (decade) => {  
  return books.some((book) => {
   return book.releaseYear >= decade && book.releaseYear <= (decade + 10);
  })
}
//console.log(bookRelease(1980));
//console.log(bookRelease(1900));
const uniqueAuthor = () => {
  return books.every((book) => 
    !books.some((bookSome) => 
    (bookSome.author.birthYear === book.author.birthYear)
    && (bookSome.author.name !== book.author.name)))
}
console.log(uniqueAuthor())
/*const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique())*/
// Adicione o código do exercício aqui:
