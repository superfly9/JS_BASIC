//0부터 n까지 0.1증가하는 수(문자열로 바꿔서)를 담은 배열
function solution(n) {
    var answer = [];
    let item = 0;
    do {
      answer.push(item.toFixed(1))
      item+=0.1
    } while (answer[answer.length-1]<n) 
    return answer;
  }