function diagonalDifference (arr) {
    let a = arr.map((item,index)=>item[index]).reduce((a,b)=>a+b);
    let b = arr.map((item,index)=>item[arr.length-1-index]).reduce((a,b)=>a+b);
    return Math.abs(a-b);
  }

//sol2)
function diagonalDifference2 (arr) {
    let diagonal1 = 0; let diagonal2 = 0;
    //for문에 변수 여러개 쓸수 있는거 처음알게 됨
    for (let i = 0, j = arr[i].length - 1; i < arr.length; i++ , j--) {
        diagonal1 += arr[i][i];
        diagonal2 += arr[i][j];
    }
    return Math.abs(diagonal1 - diagonal2);
}