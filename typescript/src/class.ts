// 基本类定义
class Greeter {
    greeting: string
    constructor (message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`
    }
}

let greeter = new Greeter('world');

// 继承
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    // 在使用 this 之前，一定要调用 super()
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

const dog = new Dog('dog');
dog.move(10);


class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        // 子类可以访问父类的 protected 修饰的构造器
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

// 参数属性
// 参数属性可以方便地在一个地方定义并初始化一个成员
class AnimalProp {
    // 在构造器的参数中定义一个成员
    constructor (private name: string) {}
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}`)
    }
}

let passcode = 'secret passcode'
class EmployeeSG {
    private _fullName: string
    
    get fullName() :string {
        return this._fullName
    }

    set fullName (newName: string) {
        if (passcode && passcode === 'secrete passcode') {
            this._fullName = newName
        } else {
            console.log("Error: Unauthorized update of employee!")
        }
    }
}

let employee = new EmployeeSG();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}

// 静态属性
class Grid {
    static origin = {x:0, y:0}
    cacculate (point: {x:number, y:number}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) {}
}

let grid = new Grid(1.0)
console.log(grid.cacculate({x:10, y:10}))

// 抽象类
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
