//크레인 실행 후 생긴 결과를 반환하는 함수
const afterCrain = (board,result,targetIndex) => {
    for (let j=0;j<board.length;j++) {
      if (board[j][targetIndex]!==0) {
        result.push(board[j].splice(targetIndex,1,0)[0])
        break;
      }
    }
}

function solution(board, moves) {
    let result = [];
    for (let i=0;i<moves.length;i++) {
        let targetIndex  = moves[i]-1;
        afterCrain(board,result,targetIndex);
    }
    let count = 0;
    let deleted = 0;
    do {
      deleted = 0;
      result.forEach((v,i)=>{
        if (result[i] === result[i+1]) {
          deleted =result.splice(i,2).length;
          count+=2;
        }
       })
    } while (deleted);

    return count;
}
/* 삭제되는 원소 존재시 deleted가 계속 2로 되있어서 무한루프에 빠졌던 문제발생
   while실행시마다 deleted = 0으로 초기화해주고 deleted가 0이 아닐때만 while문 실행
for (let i=0;i<5;i++) {
      deleted = 0;
      console.log('Before:',result)
      result.forEach((v,i)=>{
        if (result[i] === result[i+1]) {
          deleted =result.splice(i,2).length;
          count+=2;
        }
       })
       console.log('After:',result,'deleted:',deleted)
       console.log('count:',count);
    }

*/

//다른 사람 풀이
function solution(board, moves) {
  let result = 0;
  let size = board.length;
  let num = 0;
  let pocket = [];
  moves.forEach(move=>{
      let cnt = 0;
      while(true){
          
          if (board[cnt][move-1] !== 0){
              // 바구니에 인형이 있는데 잡은 인형과 같으면 터트린다
              if (pocket.length !== 0 && pocket[pocket.length-1] === board[cnt][move-1]){
                  pocket.pop();
                  result += 2;
              }else{
              // 그렇지 않다면 잡아서 옮긴다
                  pocket.push(board[cnt][move-1]);
              }
              board[cnt][move-1] = 0;
              break;
          }
          cnt ++;
          if(cnt === size)
              break;
      }
  })
  return result;
}

const rotateMatrix = (matrix) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  const newMatrix = [];
  for (let i = 0; i < colLength; i++) {
    const temp = [];
    for (let j = rowLength - 1; j >= 0; j--) {
      if (matrix[j][i] != 0) {
        temp.push(matrix[j][i]);
      }
    }
    newMatrix.push(temp);
  }
  return newMatrix;
};

const solution = (board, moves) => {
  let count = 0;
  const stack = [];
  const rotatedBoard = rotateMatrix(board);

  for (let choice of moves) {
    const poppedItem = rotatedBoard[choice - 1].pop();
    if (poppedItem) {
      const topOfStack = stack[stack.length - 1];
      if (poppedItem == topOfStack) {
        count += 2;
        stack.pop();
      } else {
        stack.push(poppedItem);
      }
    }
  }
  return count;
};