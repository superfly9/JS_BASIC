/*
함수 solution은 정수 n을 매개변수로 입력받습니다. 
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
예를들어 n이 118372면 873211을 리턴하면 됩니다.
n	return
118372	873211
*/
function solution(n) {
    let answer = String(n).split('').sort((a,b)=>b-a).join('');
    return parseInt(answer,10);
}

function solution2(n) {
    let answer = 0;
    //숫자=>문자 형변환
    n += '';
    //sort()이용해 오름차순으로 정렬 ex) 3786 => 3678
    n = n.split('').sort();
    while(n.length>0) {
        // 맨 마지막 값(가장 큰 숫자)를 뽑아내고 answer에 추가
        answer += n.pop();
    }
    return parseInt(answer);
}
