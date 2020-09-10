/*
함수 solution은 정수 x와 자연수 n을 입력 받아, 
x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 

예시
x	n	answer
2	5	[2,4,6,8,10]
4	3	[4,8,12]
-4	2	[-4, -8]

*/

//내 풀이
function solution(x, n) {
    let result = [];
    for (let i=1;i<=n;i++) {
        result.push(x*i)
    }
    return result;
  }
  

//풀이 2
  function solution(x, n) {
      //Array(n)으로 길이 n짜리 배열 생성 후, 모든 원소의 값을 x로 바꿈
      // 2*1, 2*2,2*3이런 식이 되게 map이용
      return Array(n).fill(x).map((v, i) => (i + 1) * v)
  }