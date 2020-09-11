/*
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

n	return
12345	[5,4,3,2,1]
*/

function solution(n) {
    return String(n).split('').reverse().map(v=>parseInt(v,10));
}

//ex, 123 =>[3,2,1]
function solution2(n) {
    let arr = [];
    do {
        arr.push(n%10);
        n = Math.floor(n/10); 
        //1의 자릿수만 남을때, n의 값이 0이 따라서 그 후에는 실행X
    } while (n>0);

    return arr;
}