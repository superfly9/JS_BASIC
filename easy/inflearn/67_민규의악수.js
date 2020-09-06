/*
광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다.
참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.

이 행사에서 진행된 악수는 총 n번이라고 했을 때,
민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
그리고 민규를 포함한 행사 참가자는 몇 명일까요?

- 악수는 모두 1대 1로 진행이 됩니다.
- 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
- 같은 상대와 중복된 악수는 카운트 하지 않습니다.
- 민규를 제외한 참가자는 행사를 모두 마쳤습니다.

예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.

행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니다.

**입력**
59

**출력**
/*
[4, 12] //[악수 횟수, 행사 참가자 수]
// 10명이 있다하면 이들의 악수 횟수는 (10*9)/2이다.
// 그리고 민규는 1번~사람수-1까지 악수를 할 수 있다.
// 따라서 총 악수횟수 n은 (사람수-1) * (사람수-2)/2 + 0 < n < (사람수-1) * (사람수-2)/2 + 사람수-1의 범위에 있어야한다
// 4  = 59 -  (11 * 10)/2 
// 11 = n-1 /  12 = n-2 
//            MIN     <= n  <=   MAX
// n=3     2*1/2 +0  < n < (2*1)/2 + 2
// n=4    (3*2)/2+0  <  n < (3*2)/2+ 3
// n=12   (11*10)/2+0 < n < (11*10)/2 + 11
*/

const handClap = (n) => {
    let sum = 0; //민규 제외한 사람들의 악수 횟수
    let people = 3;
    let peopleSum;
    while (true) {
      peopleSum = ((people - 1) * (people - 2)) / 2;
      console.log("ClapSum:", peopleSum);
      if (peopleSum + 0 < n && n < peopleSum + people - 1) {
        break;
      }
      people++;
    }
    let result = n - peopleSum;
    return [result, people];
  };
  console.log(handClap(67)); // [1,13] => 민규의 악수 횟수 1=67 - (12*11)/2
  console.log(handClap(59)); // [4,12] => 민규의 악수 횟수 4=59 - (11*10)/2

  //sol2

  const handClap2 = (n) => {
    let clapSum = 0; //민규 제외한 사람들의 악수 횟수
    let people = 0;
    let temp = 0;
    while (true) {
        clapSum = parseInt(people * (people-1)/2,10);
        if (clapSum<n) {
            break;
        }
        people++;
        temp  = clapSum;
    }
    return [parseInt(n-temp), people] ;
  }