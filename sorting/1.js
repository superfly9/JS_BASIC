/* quick Sort구현하세요

1. pivot기준으로 크고 작은 값을 나눈다.
2. 길이가 1인 배열이 될 때까지 시행 && 길이가 1이 되면 값을 반환
3. 반복

left                pivot      right
[54,10,11,15]       [77]        [132,135]

*/

const quickArr = [77, 54, 132, 10, 135, 11, 15];
const quickSort = (arr) => {
    let pivot = [arr[0]];
    if (arr.length<2) return arr;
    let left = [];
    let right= [];
    for (let i=1;i<arr.length;i++) {
        if (pivot < arr[i]) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
        console.log("i:", i, left, "pivot:", `${pivot}`, right);
    }
    return [...quickSort(left),...pivot,...quickSort(right)];
}
console.log(quickSort(quickArr));

// merge Sort구현하세요
/*
1. 배열을 가운데 값 기준으로 좌 / 우로 나눔
2. 이 배열의 길이가 1이 될 때까지 재귀적으로 반복 
3. 조건이 만족되면 길이가 0이거나 1인 두 배열을 크기 순으로 정렬
4. 계속 반복(길이가 작은 배열부터 오름차순으로 정렬하면서 길이를 늘리기에 길이가 늘어나도 오름차순으로 정렬이 되어있다
    따라서,맨 처음 left/right로 나누었던 배열까지 시행을 마무리 지으면 모든 원소들의 정렬이 완료)
    이를 위해 나누는 함수 / 합치는 함수가 따로 따로 필요
*/
let sort = (arr) => {
    //길이가 1이 될때까지 쪼개주는 역할
    if (arr.length <2) return arr;
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    console.log(`sort left:`,left,'sort right:',right);
    return merge(sort(left),sort(right));
}

let mergeArr = [79,3,5,19,25,10,1];

let merge = (left,right) => {
    //크기 순으로 정렬해주는 역할
    let result = [];
    console.log(`left:`,left,'right:',right);
    while (left.length > 0 && right.length> 0) {
        left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
    }
    console.log('after Compare result:',result)
    return [...result,...left,...right]
}

// console.log(sort(mergeArr));


/*bubble Sort구현하세요
1.배열을 처음부터 끝까지 순회하며, 인접한 두 원소의 크기를 비교
2.값이 큰 원소가 앞에 있다면 둘의 위치를 바꾼다.이를 계속 반복
3.한 번 시행시 마다 값이 배열 전체에서 가장 값이 큰 원소가 배열의 가장 오른쪽에 존재
4.배열의 길이만큼 계속 반복
*/
let bubbleArr = [5,4,3,21,10,1,1];
// in Place

let bubbleSort = (arr) => {
    for (let i=0;i<arr.length;i++) {
        for (let j=1;j<arr.length-i;j++) {
            if (arr[j-1]>arr[j])   [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
        }
    }
    return arr;
}
// console.log(bubbleSort(bubbleArr));