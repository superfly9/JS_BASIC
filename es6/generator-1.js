function* seoul () {
    console.log('fisrt');
    yield '1';
    console.log('second');
    yield '2';
    console.log('third');
    yield '3';
}

let gen = seoul();
let result1 = gen.next(); //{ value: '1', done: false }
let result2 = gen.next(); //{ value: '2', done: false }
let result3 = gen.next();   //{ value: '3', done: false }
let result4 = gen.next();  //{ value: undefined, done: true }

function* counter () {
    for (const v of ['seoul','korea','lite']) {
        yield v;
    }
}
const count = counter(); //generator

let es1 = count.next();  //{ value: 'seoul', done: false }
let es2 = count.next();  //{ value: 'korea', done: false }
let es3 = count.next();  //{ value: 'lite', done: false }
let es4 = count.next();  // yield실행이 다 끝났기에 {value:undefined,done:true}
let es5 = count.next();  //{value:undefined,done:true}


(function foo () {})()