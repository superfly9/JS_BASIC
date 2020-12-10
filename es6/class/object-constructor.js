//making Object => 객체 리터럴 /생성자 함수/ 클래스

//1. 정의
const City = function (name,location) {
    this.name = name;
    this.location = location;
}
//2. 프로토타입으로 method추가 가능
City.prototype.getAge = function (birth,cur) {
    return `${this.name} is ${cur-birth} years old`;
}
City.prototype.love = 'yourself'
City.prototype.getKey = function () {
    for (let i in this) { // 객체선언시 명시한 키 +프로토타입으로 추가한 키값까지 출력
        console.log(i)
    }
}
City.prototype.checkProperty = function () {
    for (let i in this) {
        if (this.hasOwnProperty(i)) { // 객체선언시 명시해놓은 키 값만 출력 (prototype으로 추가한 애들은 출력X)
            console.log(i);
        }
    }
}

const seoul = new City('seoul','korea'); // City { name : 'seoul', location : 'korea' }
console.log(seoul.__proto__) // {getAge : [Function (anonymous)], love : 'yourself' }
console.log(seoul.getAge(1492,2020)); //seoul is 528 years old
seoul.getKey() // name,location,getAge,love,getKey,checkProperty
seoul.checkProperty() // name,location