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