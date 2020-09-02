/*0901-괄호 문자열 판단
 바른 문자열 :() (()) ()()() 같이 쌍이 맞는 것
 틀린 문자열 : (() )()(  쌍이 맞지 않거나 닫는 괄호부터 나올때
 바르면 true 아니면 false를 반환하는 코드 작성
*/

/* 
#1 괄호쌍의 갯수가 맞는지 판단
1. '(' , ')'를 문자로 나누고 배열에 담기
2. 배열을 순회시 '(' 는 count++ ')'는 count--
3. 배열 순회 종료시 count === 0 이어야 ()쌍이 맞는 것

#2. )가 먼저 들어오는 경우 판단
1. let brackets=[]선언 & '('면 push ')'면 pop => 이를 통해 ()쌍이 맞으면 bracket에서 삭제
2  length === 0 일때 ')'가 들어온다면 짝이 맞지 않는 ')'가 들어온 것이므로 false
*/

const string ='()())';

const brackets = (arr)=>{
    let count = 0;
    //#1을 확인
    arr.forEach(item=>{
        if (item ==='(') count++;
        else count--
    })
    if (count!==0) return false;
    //여기까지 왔다는 건 괄호쌍의 갯수가 맞다는것,이제 #2를 확인
    let brackets = [];
    arr.forEach(item=>{
        if (item===')') brackets.push(')');
        else {
            if (brackets.length===0) return false;
            brackets.pop();
        }
    })
    return true;
}

console.log(brackets(string.split('')));