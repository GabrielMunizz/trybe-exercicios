let irmaoElemento = document.createElement('section');
let parent = document.querySelector('#pai');
parent.appendChild(irmaoElemento);
let filhoElemento = document.createElement('section');
let meuElemento = document.querySelector('#elementoOndeVoceEsta');
meuElemento.appendChild(filhoElemento);
parent = document.querySelector('#primeiroFilhoDoFilho');
let netoElemento = document.createElement('section')
parent.appendChild(netoElemento);
console.log(netoElemento.parentNode.parentNode.nextElementSibling)