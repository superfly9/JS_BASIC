function solution(a, b) {
    let sum=0;
    //같다면 그냥 사용
    if (a===b) {
        sum  = a;
    } else {
        //오름차순으로 숫자를 쓰고 싶기에,a가 b보다 더 크다면 둘의 위치를 바꿔줌
        // 그 후 차례대로 합을 누적
        if (a>b) {
            let temp='';
            temp = b;
            b = a ;
            a = temp;
        }
        for (let i=a;i<=b;i++) {
            sum+=i;
        }
    }
    return sum;
  }