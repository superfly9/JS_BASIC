import React,{useState,useCallback} from 'react';

function Parent1 () {
    const [count,setCount] = useState(0);
    const [fruit,setFruit] = useState('apple');
    return (
        <div>
            <p>{`count : ${count}`}</p>
            <button onClick={()=>setCount(count+1)}>1씩 증가</button>
            <SelectFruit    
                selected = {fruit}
                //한 번 생성 후 바뀌지 않는 상태변경함수(setFruit)를 넣어줌
                //onChage에 더 많은 로직이 필요하다면 useCallback을 이용해볼만하다
                onChange = {setFruit}
            />
        </div>
    )
}

function SelectFruit () {}

import React,{useState} from 'react';

function Parent2 () {
    const [count,setCount] = useState(0);
    const [fruit,setFruit] = useState('apple');
    //props로 전달한 함수가 상태 변경 이상의 로직이 필요하고, 특정 값이 변할때만 바뀌게 하고 싶을때 useCallback사용
    const onChangeFruit = useCallback(()=>{
        //한 번 생성된 후 변하지 않는 함수가 됨, []에 준 값이 변할때만 함수가 새로 생성
        setFruit(fruit);
        sendLog({type:'fruit change',value:fruit})
    },[])
    return (
        <div>
            <p>{`count : ${count}`}</p>
            <button onClick={()=>setCount(count+1)}>1씩 증가</button>
            <SelectFruit    
                selected = {fruit}
                onChange = {onChangeFruit}
            />
        </div>
    )
}
