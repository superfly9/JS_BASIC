//내 처음풀이
function solution(arr, divisor) {
    let result = arr.filter(number=>number%divisor ===0)
    if (result.length === 0) return [-1];
    return result.sort((a,b)=>a-b) 
}

//수정
function solution2(arr, divisor) {
    let result = arr.filter(number=>number%divisor ===0)
    return result.length === 0 ? [-1] : result.sort((a,b)=>a-b) 
}
