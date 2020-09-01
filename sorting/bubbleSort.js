let items = [18, 1, 9, 2, 5, 10, 15, 32, 88, 63, 18];

const bubbleSort = (array) => {
  let swap;
  //처음부터 마지막 원소 18까지 순회
  //매 시행마다 배열의 가장 오른쪽에 가장 큰 원소 위치
  //시행 횟수를 한 번씩 줄여줘야 함->i가 1씩 증가하는 만큼 줄여줌-> array.length-i해줌
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i-1; j++) {
      if (array[j] > array[j + 1]) {
        swap = array[j + 1];
        array[j + 1] = array[j];
        array[j] = swap;
      }
    }
  }
  return array;
};
console.log(bubbleSort(items));
//[1, 2, 5, 9, 10, 15, 18, 18, 32, 63, 88]