/*
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

arr	return
10	true
11	false

입출력 예 #1
10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.
*/
function solution(x) {
    let sum = 0;
    //1.입력된 수를 배열로 만듦(String(x).split(''))
    //2.배열의 원소가 각각의 '숫자'이므로 숫자로 형변환 후 sum에 누적
    //3.주어진 숫자x가 sum으로 나누어지는지를 확인
    String(x).split('')
             .forEach((v,i)=>sum+=parseInt(v,10));
    return x%sum === 0 ? true : false
}