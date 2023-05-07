let person = {
    name: 'Roberto',
  };
  
  let lastName = {
    lastName: 'Silva',
  };
  
  let clone = Object.assign(person, lastName);
  
  //console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  //console.log(person); // { name: 'Roberto', lastName: 'Silva' }

clone.name = 'Maria';

//console.log('Mudando a propriedade name através do objeto clone')
//console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
//console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
//console.log('--------------');

person.lastName = 'Ferreira';

//console.log('Mudando a propriedade lastName através do objeto person');
//console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
//console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

let personClone = person;
console.log(personClone)
personClone['Email'] = 'chabalala@gmail.com';
console.log(person);

let newPerson = Object.assign({},person);
console.log(newPerson)
newPerson.name = 'Zaratrusta';
newPerson.lastName = 'Sonazika';
newPerson['Email'] = 'tustinha@gmail.com'
console.log(newPerson);

let band = {
    name: 'Blind Guardian',
    formedIn: 1986,
    lastAlbum: 'Beyond the Red Mirror',
  };
  
  let info = {
    genre: 'Power Metal',
    lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
  };

  let newBandInfo = Object.assign(band, info);
  console.log(newBandInfo);
  let newObject = {
    key: 'Value'
  }
  console.log(newObject)
  let newProp = 'Prop';
  newObject.newProp;
  console.log(newObject['key']);

