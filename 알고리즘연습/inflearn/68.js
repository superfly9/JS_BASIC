/*
학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

**버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램**을 만들어주세요.

- 버스 시간표와 현재 시간이 입력으로 주어집니다.
- 출력 포맷은 "00시 00분"입니다.
   만약 1시간 3분이 남았다면 **"01시간 03분"**으로 출력해야 합니다.
- 버스 시간표에 현재 시간보다 이전인 버스가 있다면 **"지나갔습니다."**라고 출력합니다.

```jsx
**입력**
["12:30", "13:20", "14:13"]
"12:40"

**출력**
['지나갔습니다', '00시간 40분', '01시간 33분']
```
*/
//현재 시간과 배열의 주어진 시간을 빼서 > 0 보다 큰지를 확인, 출력은 00:00 (2글자)형태여야 , 배열의 값 - 주어진시간 < 0 : 지나갔습니다.

// 12:30=> : 기준으로 split [12,30]  currentTime.split(':') =>[12,40]
// minutes =( 시간 - 시간 ) * 60 + curMinutes
// 이걸 다시 / 60 해서 몫이 시간, 나머지가 분이 되게
let arr  = ["12:30", "13:20", "14:13"];
//현재 12 :40 버스 12: 30 / 13:20 / 14:13
function getTime (arr,currentTime) {
    let curArr = currentTime.split(':');
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let compareTarget = arr[i].split(':'); // ['12','30']
        let curTime = compareTarget[0] - curArr[0];
        let curMinutes = typeof curTime === 'string' ? '' : curTime * 60 + (compareTarget[1]-curArr[1]);
        
        let resultTime = Math.floor(curMinutes /60);
        let resultMinutes = curMinutes % 60;
        let timeResult =''
        if (resultMinutes < 0) {
            timeResult = '지나갔습니다.'
            result.push(timeResult);
            continue;
        }
        timeResult = `${resultTime > 10 ? resultTime : `0${resultTime}`}시간${resultMinutes>10?resultMinutes :`0${resultMinutes}`}분`;
        result.push(timeResult);
    }
    return result;
}
console.log(getTime(arr,"12:40"));
// 다른 풀이도 참고하기

//sol2
// let arr  = ["12:30", "13:20", "14:13"];
//1. : 기준으로 쪼개고 분으로 환산, 2. arr값을 쪼개서 분으로 환산 3. 분으로 환산한 2개의 값을 빼서 arr - curTime >= 0이면 60으로 나누기 ,아니면 지나간것
let curTime = '10:40'
function getTimeTable (arr,currentTime) {
    let curArr = currentTime.split(':').map(v=>parseInt(v,10)),
        curTotalMinute = curArr[0] * 60 + curArr[1],
        resultArr = [];

    for (let i in arr) {
        let targetArr = arr[i].split(':').map(v=>parseInt(v,10)),
            targetTotalMinute = targetArr[0] * 60 + targetArr[1],
            result = targetTotalMinute - curTotalMinute;

        if (targetTotalMinute < curTotalMinute ) {
            resultArr.push('지나갔습니다.');
        } else {
            let hours = Math.floor(result/60),
                minutes = result%60;
            resultArr.push(`${String(hours).padStart(2,0)}시간 ${String(minutes).padStart(2,0)}분`);
        }
    }
    return resultArr;
}
console.log(getTimeTable(arr,curTime));