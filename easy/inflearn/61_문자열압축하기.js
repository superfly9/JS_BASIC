/*
문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

**입력**
aaabbbbcdddd

**출력**
a3b4c1d4
*/

let string = "aaabbbbcdddd";
let arr = string.split("");
let count = 1;
let result = [];
arr.forEach((item, index) => {
  if (arr[index] === arr[index + 1]) count++;
  else {
    result.push(`${arr[index]}${count}`);
    count = 1;
  }
});
console.log(result.join(''));
