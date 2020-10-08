const resolvedProm = Promise.resolve(33);

console.log(resolvedProm) // Promise {<fullfilled> :33 }

let thenProm = resolvedProm.then(value => {
    console.log("이 부분은 호출 스택 이후에 실행됩니다. 전달받은 값이자 반환값은 " + value + "입니다.");
    return value;
});
// thenProm의 값을 즉시 기록
console.log(thenProm,'1');

// setTimeout으로 함수 실행을 호출 스택이 빌 때까지 미룰 수 있음
setTimeout(() => {
    console.log(thenProm,'2');
});