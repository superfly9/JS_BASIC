/*0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다. 
예를 들어 0부터 20까지 1의 개수를 세어본다면 
1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 
12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.

그렇다면 0부터 999까지 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.
*/

//내 풀이
let number = 10;
let arr = Array(number+1)
  .fill("")
  .map((item, index) => {
    return index;
  });

let result = [];
arr.forEach((item) => {
  String(item)
    .split("")
    .forEach((value) => (value === "1" ? result.push(value) : null));
});
console.log(result.length);
//300번이 나온다

//다른 풀이
let str='';  // 숫자들을 문자열로 담아둘 변수
let count=0; //1의 갯수를 셀 변수
for (let i=0;i<1000;i++) {
  str += i;
}
for (let j of str) {
  if (j==='1') count++
}
console.log(count);