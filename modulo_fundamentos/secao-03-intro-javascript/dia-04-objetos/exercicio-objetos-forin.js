/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log("Bem vinda, " + info.personagem)
  info['recorrente'] = 'Sim';
  console.log(info);
for (let keys in info) {
    console.log(keys)
};
for (let key in info) {
    console.log('---------')
    console.log(info[key]);
}
let info2 = Object.assign({},info);
info2.personagem = 'Tio Patinhas';
info2.origem = "Christmas on Bear Mountain, Dell's Four Color Comics #178";
info2.nota = 'O último MacPatinhas';
info2.recorrente = 'Sim';
console.log(info2);
for(let keys in info){
    console.log(info[keys] + ' e ' + info2[keys]);
}
*/

//1 - Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – 
//e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log('O livro favorito de ' + leitor.nome + " " + leitor.sobrenome + " se chama: " + leitor.livrosFavoritos[0].titulo);
  //2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:  
  /*{
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  };*/
  leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
  console.log(leitor)