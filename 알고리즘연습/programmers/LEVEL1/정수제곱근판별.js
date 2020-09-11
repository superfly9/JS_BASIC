/*

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요

n	return
121	144
3	-1
*/

//내 풀이
function solution(n) {
    let x = Math.sqrt(n)
    return x === parseInt(x) ? Math.pow((x+1),2) : -1
    //양의 정수가 제곱수라면-> Math.sqrt()결과가 정수
    //ex) 121 => Math.sqrt(121) === 11(정수) , 3 => Math.sqrt(3) !== 정수이므로
    // x가 계속 정수라면 제곱근 씌워도 여전히 정수임을 이용
}