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
// console.log(quickSort(arr))

//sol2) 
let arr2 = [5,8,6,9,10,7]

function swap (list,left,right) {
  [list[left],list[right]]= [list[right],list[left]];
}

function partition (list,left,right) {
  let middle = Math.floor((left+right/2)),
      pivot  = list[middle],
      i = left,
      j = right
  while (i<=j) {
    if (list[i]<pivot) {
      i++
    }
    console.log('II:',i)
    if (list[j]>pivot) {
      j--
    }
    console.log('Before:','i:',i,'j:',j)
    if (i<=j) {
      swap(list,i,j);
      i++;
      j--
    }
  }

  // i++,j--를 2번 해야하는 이유 설명할 수 있어여
  console.log('After:','i:',i,'j:',j)
  return i
}

//in place방식
function quickSort2 (list,left,right) {
  let index;
  if (list.length>1) {
    index = partition(list,left,right);
    if (left < index-1) {
      quickSort2(list,left,index-1);
    }
    if (right>index) {
      quickSort2(list,index,right)
    }
  }
  return list;
}
let sortedArr = quickSort2(arr2,0,arr2.length-1)
console.log('Sorted:',sortedArr)