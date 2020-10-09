/*
Sample Input

배열의 길이 =>5 
let ar =[1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

Output
이때 배열 원소들의 누적합 구하기
5000000015
*/
function aVeryBigSum(ar) {
    return ar.reduce((accu,current)=>accu+current);
}
