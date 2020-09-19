//배열의 처음 원소를 Pivot으로
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = [arr[0]];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (pivot < arr[i]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  console.log("j:", j, left, "pivot:", `${pivot}`, right);
  }
  //for문 전체 종료시마다 pivot기준으로 작은값이 left, 큰 값이 right에 담김
  return quickSort(left).concat(pivot,quickSort(right));
};
const arr = [ 77, 54, 132, 10, 135, 11, 15];
//결과 [10, 11, 15, 54, 77, 132, 135]
console.log(quickSort(arr))