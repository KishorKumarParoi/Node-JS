class Person extends eventEmitter {
    start() {
        console.log("Let's goo!!!");
        this.emit('SayOutLoud');
    }
}