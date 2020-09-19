let divide = (array)=> {
    if (array.length<2) {
        return array;
    }
    let mid = Math.floor(array.length/2);
    let left = array.slice(0,mid);
    let right= array.slice(mid);
    return sort(divide(left),divide(right));
}

let sort = (left,right) => {
    const sorted = [];
    while (left.length && right.length) {
        if (left[0]<right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift());
        }
    }
    console.log('Sorted:',sorted)
    const output = [...sorted,...left,...right];
    return output
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
console.log(divide(numbers))