//배열의 처음 원소를 Pivot으로
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = [arr[Math.floor(arr.length / 2)]];
  //다른 배열이 추가로 필요하기에 not in place + pivot이 맨 처음 원소인 것도 좋지 않다
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (pivot < arr[i]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
    console.log("i:", i, left, "pivot:", `${pivot}`, right);
  }
  //for문 전체 종료시마다 pivot기준으로 작은값이 left, 큰 값이 right에 담김
  return [...quickSort(left), ...pivot, ...quickSort(right)];
};
const arr = [77, 54, 132, 10, 135, 11, 15];
//결과 [10, 11, 15, 54, 77, 132, 135]
console.log(quickSort(arr))

//sol2) in place 방식

function inPlaceQuickSort (array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor(array.length / 2)
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot)
  
  inPlaceQuickSort(array, left, partition - 1)
  inPlaceQuickSort(array, partition, right)
 function divide (array,left,right,pivot)  {
  console.log(`array: ${array}, left: ${array[left]}, pivot: ${pivot}, right: ${array[right]}`)
  while (left<=right) {
    
  }
 }
}