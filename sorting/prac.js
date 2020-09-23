let divide = (arr) =>{
    if (arr.length<2) {
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle)
    let right = arr.slice(middle);
    return merge(divide(left),divide(right));
}

let merge = (left,right) => {
    let result = [];
    while (left.length>0 && right.length>0) {
        left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
    }
    return [...result,...left,...right]
}