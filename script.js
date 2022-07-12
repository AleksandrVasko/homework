'use strict';

class First {
    constructor() {

    }
    hello() {
        console.log('Привет я метод родителя!');
    }
}

class Second extends First {
    constructor() {

    }
    hello() {
        super.hello();
        console.Log('А я наследуемый метод!');
    }
}

