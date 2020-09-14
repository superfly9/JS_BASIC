/*
정수 배열 numbers가 주어집니다. 
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

numbers	result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12]
*/
function solution(numbers) {
    let arr = numbers.sort((a,b)=>a-b)
    let result =[];
    //오름차순으로 배열을 정렬 후, 전!==후이면 해당값을 result에 추가
    for (let i=0;i<arr.length;i++) {
        for (let j=i+1;j<arr.length;j++) {
          let prev = arr[i]+arr[j];
          let next = arr[i]+arr[j+1]
          //result에 없는 값들만 추가
          if (prev!==next&&result.indexOf(prev)===-1) {
            result.push(prev)
          }
        }
    }
    return result.sort((a,b)=>a-b);
  }
  

//다른 사람 풀이
function solution2(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }
    //set이 중복제거해주는 걸 기억하자!
    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}

