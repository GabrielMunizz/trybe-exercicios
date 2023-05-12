const where = document.querySelector('#where-are-you')
const whereParent =  where.parentElement
whereParent.style.backgroundColor = 'red';
const firstChildWhere = where.firstElementChild;
firstChildWhere.innerText = 'Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis!Pra lá , depois divoltis porris, paradis.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.'
const parent = document.querySelector('#parent');
const childOfParent = parent.firstElementChild;
const childWhere = where.previousElementSibling
const textoParent = whereParent

console.log(textoParent)
