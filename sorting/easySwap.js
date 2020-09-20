let arr = [1,2,3,4,5,6,7,8,9,10];
const swap = (arr,a,b)=>[arr[a],arr[b]] = [arr[b],arr[a]];

console.log(swap(arr,1,2),arr);


let arr2 = [1,2,3,4,5,6,7,8,9,10];
const oldSwap = (arr,a,b)=>{
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
    return [arr[a],arr[b]];
}
console.log(oldSwap(arr2,arr2.length-2,arr2.length-1),arr2)