let count;

function mergeSort(array) {
    count = 0;
    if (array.length < 2) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid); //mid기준으로 크기 상관없이 배열을 나눔
    const right = array.slice(mid);
    console.log('Left:', left, 'Right:', right);
    return merge(mergeSort(left), mergeSort(right)); // mergeSort(left)의 return 반환 후, mergeSort(right)의 실행 => 둘 다 끝나면 merge실행
}

function merge(left, right) {
    const resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    count++;
    console.log('Left Index:', leftIndex, 'Right Index:', rightIndex);
    console.log('Left:', left, 'Right:', right, 'Result:', resultArray);
    console.log('Merge End', 'Count:', count)
    return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex)); // [3,4] [3,6]
}
let arr = [4, 3, 6, 3, 2, 1, 4, 5]
console.log(mergeSort(arr));


//sol2 
const divide = (array) => {
    if (array.length < 2) {
        return array
    }
    const mid = Math.floor(array.length / 2)
    const smallOne = array.slice(0, mid)
    const smallTwo = array.slice(mid)
    return sort(divide(smallOne), divide(smallTwo))
}

const sort = (smallOne, smallTwo) => {
    const sorted = []
    while (smallOne.length && smallTwo.length) {
        if (smallOne[0] <= smallTwo[0]) {
            sorted.push(smallOne.shift())
        } else {
            sorted.push(smallTwo.shift())
        }
    }
    const output = [...sorted, ...smallOne, ...smallTwo]
    console.log(output)
    return output
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
console.log(divide(numbers))