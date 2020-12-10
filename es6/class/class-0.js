class City {
    constructor (name,location) {
        this.name = name;
        this.location = location;
    }
    getAge (birth,cur) {
        return `${this.name} is ${cur-birth} years old`;
    }
    //method제외한 클래스 내부의 변수는 constructor안에서 다 선언해야
}
City.prototype.getKey = function () {
    for (let i in this) { // constructor내부 변수만 출력 +  프로토타입으로 추가한 속성의 키값까지 출력 가능
        console.log(i)   // 생성자 함수와는 다르게 클래스 안에 선언한 method는 출력X
    }
}
City.prototype.checkProperty = function () {
    for (let i in this) {
        if (this.hasOwnProperty(i)) { // constructor내부의 변수만 클래스의 property로 간주
            console.log(i);
        }
    }
}


const seoul = new City('seoul','korea');
seoul.getKey() // name,location,getKey,checkProperty
seoul.checkProperty() // name,location