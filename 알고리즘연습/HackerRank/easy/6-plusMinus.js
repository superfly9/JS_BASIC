/*Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:
let arr = [1,1,0,-4,-4];
0.400000 양수의 갯수 / 전체 배열의 길이
0.400000 ...
0.200000 ...이하 동일
*/
function plusMinus(arr) {
    let length = arr.length;
    let plus=arr.filter(value=>value>0).length/length;
    let minus=arr.filter(value=>value<0).length/length;
    let zero=arr.filter(value=>value===0).length/length;
    console.log(plus.toFixed(6));
    console.log(minus.toFixed(6));
    console.log(zero.toFixed(6));
}