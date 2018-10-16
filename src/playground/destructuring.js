//const person = {
//    name: 'Spade',
//    age: 22,
//    location: {
//        city: 'Antigua',
//        temp: 99
//    }
//};
//const {name,age} = person;
//console.log(`${name} is ${ age }`);


//const book = {
//    title: 'Ego',
//    author: 'ryan',
//    publisher: {
//       // name: 'penguin'
//    }
//};
//const { name:publisherName ='Self-Published' } = book.publisher;
//console.log(`${publisherName} `);

const address = [ '1299 Bla bla bla', 'Antyigua', 'St johns', '11273'];

const [street,city,state,zip] = address;
console.log(`you are in ${city} ${state}`);

const item = ['Coffee(hot)', '2.00', '2.50', '2.75'];
const [name, ,price] = item;
console.log(`A medium ${name} costs ${price}`);