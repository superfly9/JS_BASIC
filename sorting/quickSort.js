//배열의 처음 원소를 Pivot으로
const quickSort = (arr) => {
  if (arr.length<2) return arr;
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

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(arr2, 0, arr2.length - 1);
console.log(sortedArray); //prints [ 5, 6, 7, 8, 9, 10 ]