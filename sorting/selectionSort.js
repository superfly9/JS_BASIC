//선택정렬을 구현하시오
//최솟값을 찾기 -> 그 값을 가장 앞의 값과 바꾸기
// 계속 반복

let arr = [5, 4, 3, 2, 10, 1, 1];

const selectionSort = (arr) => {
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
        console.log(minIndex);
      }
      if (minIndex !== i) {
        let swap = arr[i]; //배열의 맨 앞에 위치한 값
        arr[i] = arr[minIndex]; //최솟값을 배열의 맨 앞에 넣는다
        arr[minIndex] = swap; //원래 최솟값의 위치에 맨 앞에 있던 값을 넣음
      }
    }
    console.log(`${i + 1}회전: ${arr}`);
  }
  return arr;
};
console.log(selectionSort(arr));
//[1, 1, 2, 3, 4, 5, 10]
