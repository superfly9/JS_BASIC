/*
A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 
여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.
S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  
S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 
둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.

이처럼 **두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램**을 만들어 주세요.

두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.

출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.

입력
THISISSTRINGS
THISIS

출력
6
-
입력
THISISSTRINGS
TATHISISKKQQAEW

출력
6
-
입력
THISISSTRINGS
KIOTHIKESSISKKQQAEW

출력
3
-
입력
THISISSTRINGS
TKHKIKSIS

출력
3
*/

const { get } = require("http");

/*
1.가장 긴 길이부터 하나씩 쪼개고 쪼개기,쪼개기
2. 각각을 쪼갠 값이 있는 배열에서 다른 배열의 원소를 포함하고 있는 지 확인, 포함하고 있는 값만 반환 후 그 중 길이 가장 긴것 반환
str = abcde

for문 2번 : 
1번째
abcde =>  str.slice(0,length-0)
2번째
abcd => str(0,length-1) i =1
bcde => str(1,length-0)  

3번째  i= 2
abc => str(0,length-2)  j=0  length -i +j
bcd => str(1,length-1)  j=1  legnth -i+j
cde => str(2,length-0)  j=2  length -i+j

4번째
ab => str(0,length-3)
bc => str(1,lenght-2)
cd => str(2,lenght-1)
de => str(3,lenght-0)

5번째
a =>str(0,length-4)
b => str(1,length-3)
c
d
e
*/
function getLongest (str1) {
    let result = [];
    for (let i=0;i<str1.length;i++) {
        for (let j=0;j<i+1;j++) {
            let target = str1.slice(j,str1.length-i+j);
            // console.log('target:',target, 'i:',i,'j:',j)
            result.push(target);
        }
    }
    return result;
}
let arr1 = getLongest('THISISSTRINGS');
let arr2 = getLongest('TKHKIKSIS');
let result = arr1.filter(v=>arr2.includes(v));
result.sort((a,b)=>b.length - a.length);

console.log(result[0]);