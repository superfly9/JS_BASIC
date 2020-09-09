// 내풀이
function solution(number) {
    let answer = 0;
    for (let divider = 1; divider <= number; divider++) {
      answer += number % divider === 0 ? divider : 0;
    }
    return answer;
  }