import * as events from 'events';

const eventEmitter = new events.EventEmitter();

const hello = () => console.log('Hello World Kishor !');

// register a event
eventEmitter.on('SayOutLoud', ({ name, age }) => {
    hello();
    console.log(`Hello ${name}, your age is ${age} !`);
});
// raise a event
setTimeout(() => {
    eventEmitter.emit('SayOutLoud', {
        name: 'Kishor',
        age: 25,
    });
}, 2000);
