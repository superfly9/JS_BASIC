/*
l = [10, 20, 25, 27, 34, 35, 39]
l = [35, 39, 10, 20, 25, 27, 34]
여기서 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

순회 전_리스트 = [10, 20, 25, 27, 34, 35, 39]
순회 후_리스트 = [35, 39, 10, 20, 25, 27, 34]
리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.
*/
const before= [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const after = [35, 39, 10, 20, 25, 27, 34]
    //index    5=> 0  ( 5 + 2 = 7이고 7 % 7 = 0)
    //         6 =>1  ( 6 + 2 = 8이고 8 % 7 = 1)
const n = 2;
// 1. 순회된 배열을 만들어야 (새로운 배열을 만들어서) 2. newIndex = (원래 인덱스 + 2) % array.length
function rotate(arr, rotation){
    let newArr = [];
    for (let i in arr) {
        // i의 type이 string이라니...당연히 숫자인줄 알았는디...
        let newIndex = (Number(i) + rotation) % arr.length;
        newArr[newIndex] = arr[i];
    }
    let dif = newArr.map((_,i)=>Math.abs(arr[i]-newArr[i]));
    let minIndex = dif.indexOf(Math.min(...dif));
    return `최소값의 index :${minIndex} 순회 전 :${arr[minIndex]} 순회 후: ${newArr[minIndex]}`
}

console.log(rotate(before, n))