const arr = [ 77, 54, 132, 10, 135, 11, 15];


//배열의 처음 원소를 Pivot으로
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = [arr[0]];
  let left = [];
  let right = [];
  for (let i = 1; i < length; i++) {
    if (pivot < arr[i]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
    // console.log("j:", j, left, "pivot:", `${pivot}`, right);
  }
  return quickSort(left).concat(pivot,quickSort(right));
};
//결과 [10, 11, 15, 54, 77, 132, 135]