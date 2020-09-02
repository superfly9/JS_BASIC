/*

목적
시작기둥->도착기둥으로 원판을 하나씩 옮길 때 최소한의 방법으로 옮기는 경우의 수는?

규칙
1.한번에 하나의 원판만 이동
2.맨위에 있는 원판만 이동 가능
3.작은 원판 위에 큰 원판을 올리는 것은 불가능
*/

let routes = [];
const hanoi = (number, from, temp, to) => {
  if (number === 1) {
    routes.push([from, to]);
    return;
  }
  // 가장 큰 원판은 도착기둥으로 가야하므로,나머지 n-1개의 원판을 먼저 임시기둥에 놓기
  hanoi(number - 1, from, to, temp);
  //시작기둥에 혼자 남은 가장 큰 원판을 도착기둥에 놓기
  routes.push([from, to]);
  // 임시기둥에 있는 n-1개 원판을 시작 기둥을 거쳐 도착기둥에 놓기
  hanoi(number - 1, temp, from, to);
  return routes;
};

console.log(hanoi(5, "A", "B", "C"));
