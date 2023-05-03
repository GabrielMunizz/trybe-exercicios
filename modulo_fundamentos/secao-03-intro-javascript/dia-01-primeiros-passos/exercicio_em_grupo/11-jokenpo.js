/* Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando. Exiba o resultado no formato:
"Player 1 won" ou "A Ties" ou "Player 2 won". */
let jogador1 = 'agua';
let jogador2 = 'tesoura';

if (jogador1 === 'pedra' && jogador2 === 'tesoura') {
    console.log('Player 1 won');
}else if (jogador1 === 'papel' && jogador2 === 'pedra') {
    console.log('Player 1 won');    
}else if (jogador1 === 'tesoura' && jogador2 === 'papel') {
    console.log('Player 1 won');
}else if (jogador2 === 'pedra' && jogador1 === 'tesoura') {
    console.log('Player 2 won');
}else if (jogador2 === 'papel' && jogador1 === 'pedra') {
    console.log('Player 2 won');    
}else if (jogador2 === 'tesoura' && jogador1 === 'papel') {
    console.log('Player 2 won');
}else if (jogador1 === jogador2){
    console.log('A Ties')
}else  {
    console.log('Invalido');
}