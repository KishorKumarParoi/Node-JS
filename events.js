import * as events from 'events';

const eventEmitter = new events.EventEmitter();

const hello = () => console.log('Hello World Kishor !');

eventEmitter.on('SayOutLoud', hello);
eventEmitter.emit('SayOutLoud');
