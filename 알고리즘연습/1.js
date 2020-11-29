/*
배열의 회전이란 모든 원소를 오른쪽으로 한 칸씩 이동시키고, 마지막 원소는 배열의 맨 앞에 넣는 것을 말합니다.
569815284.94.png

두 배열 arrA와 arrB가 매개변수로 주어질 때, arrA를 회전해 arrB로 만들 수 있으면 true를, 그렇지 않으면 false를 return 하는 solution 함수를 작성해주세요.

제한 조건
arrA는 길이가 1 이상 1,500 이하인 배열입니다.
arrA의 원소는 0 이상 1,500 이하인 정수입니다.
arrB는 길이가 1 이상 1,500 이하인 배열입니다
arrB의 원소는 0 이상 1,500 이하인 정수입니다.
입출력 예
arrA	arrB	return
[7, 8, 10]	[10, 7, 8]	true
[4, 3, 2, 1]	[5, 4, 1, 2]	false
*/
function getRotate (arr,rotation) {
    let newArr = [];
    for (let i in arr) {
        let newIndex = (Number(i) + rotation) % arr.length;
        newArr[newIndex] = arr[i];
    } 
    return newArr;
}


function solution(arrA, arrB) {
    let newArr = [];
    for (let i = 1;i<=arrA.length;i++) {
        let rotation = i;
        let value = getRotate(arrA,rotation);
        newArr.push(value);        
    }
    for (let arr of newArr) {
        let result = arr.every((value, index) => value === arrB[index])
        if (result) {
            return true;
        }
    }
    return false;
}