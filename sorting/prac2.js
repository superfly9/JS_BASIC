//Quick
//pivot => left /right 
const arr = [ 34,77, 54, 132, 10, 135, 11, 15];

const quickSort = (arr) =>{
    if (arr.length<=1) return arr;
    const pivot = [arr[0]];
    let left = [];
    let right =[];
    for (let i=1;i<arr.length;i++) {
        if (arr[i]<pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),...pivot,...quickSort(right)]
}
console.log(quickSort(arr))