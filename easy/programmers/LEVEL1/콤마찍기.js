/*
원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

**숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.**

예를 들어, 
**123456789**를 입력받았으면 **123,456,789**를 출력해야 합니다.
*/

const value = '123456789';

let arr =value.split('').reverse();

let result = arr.map((numberValue,index)=>{
  if (index === arr.length-1) return numberValue;
  if (index % 3 ===2 ) {
    return numberValue = `,${numberValue}`;
  } 
  return numberValue;
}).reverse().join('');

console.log(result);

//재귀함수 이용

//String.slice()는 기존의 문자열을 바꾸지는 않는다
//새로운 문자열을 반환할 뿐
//String.slice(시작인덱스,종료인덱스)=>시작~종료인덱스-1까지의 문자열을 자른다
let string = "123456789";

const makeComma = (string) => {
  if (string.length<=3) return string;
  //  맨 뒤 문자열 3개와 나머지를 자르는 역할을 하는 함수, 앞의 문자열은 계속 뒷문자열 3개씩을 잘라야
 return `${makeComma(string.slice(0,string.length-3))},${string.slice(string.length-3)}`
}
console.log(makeComma(string)); // 123,456,789
