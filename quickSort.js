const arr = [ 77, 54, 132, 10, 135, 11, 15];

//주어진 배열의 처음 원소를 Pivot으로
let j = 0;
const quickSort = (arr) => {
  let length = arr.length;
  if (length <= 1) return arr;
  const pivot = [arr[0]];
  //피벗값이 제외된 배열을 순환
  let left = [];
  let right = [];
  for (let i = 1; i < length; i++) {
    j++;
    if (pivot < arr[i]) {
      right.push(arr[i]);
      console.log(i, "right:", right);
    } else {
      left.push(arr[i]);
      console.log(i, "left:", left);
    }
    if (j === length) {
      j = 0;
    }
    // console.log("j:", j, left, "pivot:", `${pivot}`, right);
  }
  return quickSort(left).concat(pivot,quickSort(right));
};

//결과 [10, 11, 15, 54, 77, 132, 135]