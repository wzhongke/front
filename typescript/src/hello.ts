interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
}

function areaWithInterface (shape: Shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}

function area(shape: string, width: number, height: number) :string{
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}
 
console.log( areaWithInterface( {name: "rectangle", width: 30, height: 15} ) );
console.log( areaWithInterface( {name: "square", width: 30, height: 30, color: "blue"} ) );

document.body.innerHTML = area("rectangle", 30, 15);

/**
 * public 成员可以在任何地方访问， private 成员只允许在类中访问。
 */
class ShapeClass {
 
    area: number;
    width: number;
    height:number;
    private color: string;
 
    constructor (public name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };
 
    shoutout() {
        return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
    }
}

let shape = new ShapeClass("name", 10, 10);
shape.name;

/**
 * 继承
 */

class Shape3D extends ShapeClass {
 
    volume: number;
 
    constructor ( public name: string, width: number, height: number, length: number ) {
        super( name, width, height );
        this.volume = length * this.area;
    };
 
    shoutout() {
        return "I'm " + this.name + " width:" + " with a volume of " + this.volume + " cm cube.";
    }
 
    superShout() {
        return super.shoutout();
    }
}