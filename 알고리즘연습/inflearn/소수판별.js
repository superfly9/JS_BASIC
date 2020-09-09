// 주어진 문장에서 q => e로 바꾼 문장을 반환
const word = 'hqllo my namq is sqwon';
let arr=word.split('q') // [h,llo my nam, is s,won]
arr.join('e'); //hello my name is sewon

//소수 판별 (소수:1과 자기 자신으로만 나누어떨어지는 1보다 큰 양의 정수)
const prime = 21;

const primeFunc = (targetNumber)=>{

    if (targetNumber===1) return console.log(`${targetNumber}은 소수가 아니다`);
    for (let i=2;i<targetNumber;i++) {
        if (targetNumber%i===0 ) {
            console.log(`${targetNumber}은 소수가 아니다`);
            return;
        }   
    }
    console.log(`${targetNumber}은 소수입니다.`)
}
primeFunc(prime);