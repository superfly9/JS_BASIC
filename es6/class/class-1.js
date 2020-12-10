//extends + prototype chaining
class Car {
    constructor (brand) {
        this.brand = brand;
        this.wheels = 4;
    }
    start () {
        return 'Start';
    }
    stop () {
        return 'End';
    }
}

class Hyundai extends Car {
    company () {
        console.log('현대차는 우리나라 차입니다.')
    }
}
const genesis = new Hyundai('hyundai'); // 부모 construtor에 전달, Hyundai { brand : 'Hyundai', wheels: 4}
console.log(genesis.__proto__) // Car {}
console.log(genesis.__proto__.stop()); // End