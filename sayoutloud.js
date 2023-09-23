import eventEmitter from 'events';

// console.log(eventEmitter);

class Person extends eventEmitter {
    start() {
        console.log('started raising event');
        setTimeout(() => {
            this.emit('sayOutLoud', { msg: 'Hello World', name: 'Kishor Paroi', age: 25 });
        }, 2000);
    }
}

export default Person;
