/* 
merge /  divide
*/

const divide = (arr)=>{
    if (arr.length<2) return arr;
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle)
    let right = arr.slice(middle);
    return merge(divide(left),divide(right))
}

const merge = (left,right)=>{
    const sorted = [ ];
    while (left.length>0 && right.length>0) {
        left[0]<=right[0] ? sorted.push(left.shift()) :  sorted.push(right.shift())
    }
    return [...sorted,...left,...right]
}
const numbers = [8, 5,5, 6, 9, 3, 1, 4, 2, 7, 10]
console.log(divide(numbers))