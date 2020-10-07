// 1. 정의 및 사용
class Person {
    // class는 함수다. new Person()은 객체를 만들어주는 함수를 실행한 것  
    //constructor의 역할 - 인스턴스(객체) 생성 및 클래스 필드(constructor 내부 변수) 초기화 동시에 진행
    constructor (name='Initiate Class Field') {
        this.name = name;
    }
    say () {
        return `${this.name} says Hi`;
    }
}
let person1  = new Person('ES 6 class'); // new + class이름 호출( 실제로는 constructor메소드 호출한 것이다[클래스 선언시 class이름 === constructor이름이기에] )=> 클래스의 인스턴스 생성
//클래스 선언시 클래스 이름 = constructor이름이고 new를 붙여야 constructor호출가능, new 안 붙이고 constructor호출시 Type Error발생
//let p = Person('sdsd')  TypeError: Class constructor Person cannot be invoked without 'new'

console.log(person1);//Person{name:'ES 6 class'}
console.log(person1 instanceof Person); // true


// 2. 클래스 재사용 (상속을 이용)
//부모
class Circle {
    constructor (radius) {
        this.radius = radius;
    }
    //지름
    getDiameter () {
        return this.radius * 2;
    }
    //둘레
    getPerimeter () {
        return this.radius * 2 * Math.PI;
    }
    //넓이
    getArea () {
        return Math.pow(this.radius ,2) * Math.PI;
    }
}

//class 자식 이름 extends 부모 이름 => 자식 클래스가 부모 클래스 상속 
class Cylinder extends Circle {
    constructor (radius,height) {
        super (radius); // super(radius) === 부모의 constructor(radius) 
        // radius를 파라미터로 부모 클래스의 constructor()호출, 즉 부모 클래스 인스턴스 생성하고 이후에 this를 사용가능
        //super()실행 전에는 자식클래스에서 this를 사용할 수 없다
        this.height = height;
    }
    getArea () {
        //super를 통해 부모 클래스를 참조
        return (super.getArea() * 2 ) + (super.getPerimeter() * this.height);
    }
    getVolume () {
        return super.getArea() * this.height;
    }
    getThis () {
        return this
    }
}

const cylinder = new Cylinder(8,10) 

console.log(cylinder.getThis()) //Cylinder { radius:8, height:10 }
console.log(cylinder); //Cylinder { radius:8, height:10 }
console.log(cylinder instanceof Cylinder) //true
console.log(cylinder instanceof Circle) // true