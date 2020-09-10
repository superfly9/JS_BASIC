//내 풀이
function solution(phone_number) {
    let result = phone_number.split('');
    for (let i=0;i<phone_number.length-4;i++) {
        result[i] ='*';
    }
    return result.join('');
}

//풀이2
function hide_numbers(s){
    //앞 부분은 *로 채우고, 맨 뒤 4번째 숫자부터 그대로 가져옴
    let result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
  }
  