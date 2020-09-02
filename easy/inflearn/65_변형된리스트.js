/*
a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때  [[1, a], [b, 2], [3, c], [d, 4]]
이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/

let a = [1, 2, 3, 4];
let b = ["가", "나", "다", "라"];

let result = a.map((value, index) => {
  if (index % 2 === 0) {
    //이 부분이 포인티, 관련없는 배열의 값을 인덱스 참고해서 가져옴
    return [value, b[index]];
  } else {
    return [b[index], value];
  }
});
console.log(result);
