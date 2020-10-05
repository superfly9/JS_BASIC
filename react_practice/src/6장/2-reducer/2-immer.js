import produce from 'immer';

const person = {name:'승찬',age:10}

const nextState = produce(person, (draft)=>{
    draft.age=25
}); // produce() === 새로운 객체 , produce의 실행은 새로운 객체를 반환한다
console.log(nextState) // {name: '승찬' ,age:25}