//Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores.
let clientesTrybeBank = ['Ada', 'John', 'Gus', 'Gabriel'];
function findClient(cliente) {      
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);        
        return 'Cliente excluída(o) com sucesso.';
      } 
    }
    return 'Cliente não encontrada(o).'  
};
function removeCliente(clientName) {
    if(typeof clientName !== 'string') {
        return 'O parâmetro passado deve ser do tipo "string"!'
    } else {        
        return findClient(clientName)
    }
}
console.log(removeCliente('Ada'));
console.log(clientesTrybeBank);