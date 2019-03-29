
function world() {
    console.log('Hello World')
}

function Hello () {
    let name;
    this.setName = function (thyName) {
        name = thyName;
    }

    this.sayHello = function () {
        console.log(`Hello ${name}`)
    }
}

class HelloC {
    set name (name) {
        this._name = name;
    }

    sayHello () {
        console.log(`Hello ${this._name}`)
    }
}

module.exports = {
    Hello,
    world,
    HelloC
};