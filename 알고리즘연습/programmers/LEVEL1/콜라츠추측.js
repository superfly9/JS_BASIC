/*내풀이
1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다.
 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 
 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.
*/
function solution(num) {
    let count = 0;
    while (num !== 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
      count++;
      if (count >= 500) {
        return -1;
      }
    }
    return count;
  }



  //다른사람 풀이
  function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        //answer(즉, count수를 while에서 같이 체크하는 게 인상적이었다)
        num%2==0 ? num = num/2 : num = num*3 +1;
        answer++;
  }
    return num == 1 ? answer : -1;
}
