//내 풀이
function solution(n) {
    var answer = '';
    for(let i=0; i<n; i++){
        if(i%2 === 0) {
            answer+= '수';
        } else {
            answer+= '박';
        } 
    }
    return answer;
}
//내 풀이2
function solution (n) {
    var answer = n%2 === 0 ? '수박'.repeat(n/2) : '수박'.repeat(n/2)+'수'
    return answer;
}

//다른 사람 풀이->제일 깔끔
const waterMelon = n => "수박".repeat(n).slice(0,n);