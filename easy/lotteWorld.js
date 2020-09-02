/*놀이공원에서 숫자 스탬프를 모아오면 선물을 주고 있다.
  숫자 스탬프는 매일 그 숫자가 달라지지만 그 숫자는 항상 연속된다.
  그런데 요즘 다른 날에 찍은 스탬프를 들고 오는 사람이 많다.

  스탬프에 적힌 숫자가 모두 연속이면 true 아니면 false를 반환하는 함수를 작성하시오
  (스탬프는 배열로 주어진다)
*/

const arr = [2,3,4,10,15];
const arr1=[4,5,6,1,2,3]

const checkStamp = (arr) =>{
    //배열을 숫자 오름차순으로 정렬 후 시행
    arr.sort((a,b)=>a-b);
    for (let i=0;i<arr.length-1;i++) {
        if (arr[i]+1 !== arr[i+1]) return false;
    }
    return true;
}
console.log(checkStamp(arr));
console.log(checkStamp(arr1));