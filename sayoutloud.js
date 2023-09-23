/* eslint-disable class-methods-use-this */
import * as events from 'events';

const eventEmitter = new events.EventEmitter();
console.log(eventEmitter);

class Person extends eventEmitter {
    start() {
        console.log("Let's goo!!!");
        this.emit('SayOutLoud');
    }
}

export default Person;
