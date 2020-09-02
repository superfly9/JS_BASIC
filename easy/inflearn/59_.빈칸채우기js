/* 
총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 
그 문자열을 가운데 정렬을 해주고, 
나머지 빈 부분에는 '='을 채워 넣어주세요.

스스로 든 예시: 총 길이 10으로 제한
 
ex)===Str====

 "="의 갯수 = 전체길이 - 문자열 길이  = 7;시작인덱스=>"="의 갯수를 2로 나누고 내림하기
 Math.floor(space/2); => 3
 */

let string = "Str";
let totalLength = 50;
let arr = Array(totalLength).fill("="); // "="을 totalLength만큼 가진 배열 생성
let startIndex = Math.floor((totalLength - string.length) / 2); //문자열을 넣어줄 시작 인덱스 결정
//startIndex:23
console.log(startIndex, arr);

for (let i = 0; i < string.length; i++) {
  //startIndex위치부터 문자를 바꿔준다,string.length만큼 반복
  //지금은 23/24/25번째 위치에 문자를 바꿔서 넣어준다
  arr[startIndex + i] = string[i];
}
console.log(arr.join(""));
