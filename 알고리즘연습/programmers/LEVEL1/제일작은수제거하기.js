/*
let arr1  =  [1,2,3];
let arr2 =  arr1
let arr3 = arr1.concat();  [1,2,3] 단,arr1을 참조하지는 않는다.

console.log(arr1===arr2,arr1===arr3)  =>  true ,false

concat을 사용해 얕은복사
->즉,arr3를 바꿔도 arr1이 바뀌지x ,그러나 arr2는 arr1과 같은 레퍼런스를 같기에 arr2변하면 arr1도 바뀜
console.log(arr2.push('Seoul'),arr2,arr1); =>  4,[1, 2, 3, "Seoul"],[1, 2, 3, "Seoul"]
console.log(arr3.push('Lite'),arr3,arr1); =>4, [1, 2, 3, "Lite"],[1, 2, 3, "Seoul"]
*/


//풀이1
function solution(arr) {
    let answer = [];
    if(arr.length===1){ //값이 하나일땐 제거하면 무조건 빈 배열이므로
        answer.push(-1);
        return answer;
    }
    let min = Math.min(...arr); //주어진 배열에서 가장 작은값 가져오는 방법
    answer = arr.filter(element=>element!==min);
    return answer;
}


//풀이2
function solution(arr) {
    var answer = [];
    var lengthOfArr = arr.length;
    var min = 0;
    var newArr = arr.concat();

    newArr.sort((a,b) => b-a);
    min = newArr[lengthOfArr-1];
  
    for(var i=0; i<lengthOfArr; i++){
      if(arr[i] != min){
      answer.push(arr[i]);
      }
    }
 
    if(answer.length === 0){
      answer.push(-1);
    }
    
    return answer;
}