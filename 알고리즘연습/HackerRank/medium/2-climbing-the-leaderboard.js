//처음 풀이 : 몇 개 케이스에서 Terminated due to timeout 가 뜸
function climbingLeaderboard(scores, alice) {
    let result =[];
    scores = Array.from(new Set(scores));
    
    for (let i=0;i<alice.length;i++) {
        //alice의 score보다 큰 애들의갯수+1 = alice의 등수
        result.push(scores.filter(item=>item>alice[i]).length+1)
    }
    return result;
}

/*
7 						// score num
100 100 50 40 40 20 10 	// scores array
4 						// alice score num
5 25 50 120 	

1st
5      result =  length + 1;
중복 제거(length = 5) 100 50 40 20 10 => 마지막 값부터 순환해서 오름차순인 것처럼 사용, 
alice<score[i[이면 나머지 score값들은 score[i]보다 크기에 for문 더 돌 필요X
10 20 40 50 100 
20 ===20 => 더이상 for문 진행할 필요X, break
15  < 20
*/

let score = [100,100 ,50, 40, 40, 20, 10];
let alice = [5 ,25 ,50 ,120 ];
function climbingLeaderboard1(scores, alice) {
    let result =[];
    scores = Array.from(new Set(scores));
    let startIndex  = 0;
    for (let i = alice.length - 1; i >= 0; i--) {
            let aliceScore = alice[i];
            //alice의 점수를 매 시행마다 꼴찌로 가정
            result[i] = scores.length + 1;
            for (let j = startIndex; j < scores.length; j++) {
                if (scores[j] <= aliceScore) {
                    result[i] = j + 1;
                    break;
                } else {
                    startIndex++;
                }
            }
        }
    return result;
}

console.log(climbingLeaderboard1(score,alice));