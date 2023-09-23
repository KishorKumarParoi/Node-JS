import Person from './sayoutloud.js';

const person = new Person();
// console.log(person);
// register a listener
person.on('sayOutLoud', ({ msg, name, age }) => {
    console.log(`I am ${name}, ${age} years old and I say ${msg}`);
});

person.start();
