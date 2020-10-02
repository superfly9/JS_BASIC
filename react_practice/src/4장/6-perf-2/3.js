import React,{useState,useCallback} from 'react';


function SelectFruit ({select,onChange}) {
    return (
        <>
            <Select 
            //이렇게 객체를 주면 컴포넌트 생성시마다 리액트는 새로운 객체로 인식
            //따라서 <Select />으 props가 변하기에 <Select />컴포넌트가 불필요하게 다시 렌더링
            //객체를 외부 변수로 빼주자(이러면 reference가 일정하기에 props의 변화로 인식X)
              option={[
                {name:'apple',price:100},
                {name:'lemon',price:200},
                {name:'banana',price:150}
              ]} 
              select={select}
              onChange={onChange}
            />
        </>
    )
}


const FRUITS = [
    {name:'apple',price:100},
    {name:'lemon',price:200},
    {name:'banana',price:150}
]


function SelectFruit ({select,onChange}) {
    return (
        <>
            <Select 
            //객체의 reference변화x=><Select />의 속성값에 변화 없기에 불필요한 렌더링 안 일어나
              option={FRUITS} 
              select={select}
              onChange={onChange}
            />
        </>
    )
}
