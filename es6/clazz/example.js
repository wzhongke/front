
class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        console.log(new.target);
    }

    toString () {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

let point = new Point(2, 3);
console.log(point.toString());

console.log(point.hasOwnProperty('x'))
console.log(point.hasOwnProperty('y'))
console.log(point.hasOwnProperty('toString'))
console.log(point.__proto__.hasOwnProperty('toString'))
console.log(toString());

let MyClass = class You {
    getClassName() {
        return You.name;
    }

    get pro () {
        return this.prop;
    }

    set pro (value) {
        this.prop = value;
    }
}

let me = new MyClass();
console.log(me.getClassName());

me.pro = 'test';
console.log(me.pro);

class ColorPoint extends Point {
    constructor (x, y, color) {
        console.log("this is ColorPoint constructor");
        super(x, y);
        this.color = color;
    }
}

let color = new ColorPoint(1, 2 , 3);

console.log(Object.getPrototypeOf(color) === Point)

function mix(...mixins) {
    class Mix {}
  
    for (let mixin of mixins) {
      copyProperties(Mix, mixin); // 拷贝实例属性
      copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
    }
  
    return Mix;
  }
  
function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if ( key !== "constructor"
            && key !== "prototype"
            && key !== "name"
        ) {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}
class Rectangle  extends Point {
    constructor(){}
}

let r = new Rectangle(3, 4);
console.log(r.toString());

console.log(Object.getPrototypeOf(Rectangle))
