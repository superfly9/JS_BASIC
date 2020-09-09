//내풀이

//처음
function solution(s) {
    let answer = '';
    let length = s.length;
    let index  = Math.floor(length/2);
    answer = length % 2 === 0 ?  s.slice(index-1,index+1) : s.slice(index,index+1);
    return answer;
}

//다른 것 참고 후
function solution(s) {
    let index  = Math.floor(s.length/2);
    return s.length % 2 === 0 ?  s.slice(index-1,index+1) : s.slice(index,index+1);
}