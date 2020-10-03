import React,{useState,useMemo} from 'react';

function SelectFruit1 ({select,onChange}) {
    const [maxPrice,setMaxPrice] = useState(1000);
    return (
        <>
            <Select 
              //FRUITS.filter가 매번 새로운 배열을 생성하고, option이라는 props의 변화로 이어짐=>불필요한 렌더링
              option={FRUITS.filter(item=>item.price<=maxPrice)} 
              select={select}
              onChange={onChange}
            />
        </>
    )
}
const FRUITS = [
    {name:'apple',price:500},
    {name:'lemon',price:1000},
    {name:'banana',price:1500}
]

function SelectFruit2 ({select,onChange}) {
    const [maxPrice,setMaxPrice] = useState(1000);
    //위의 컴포넌트처럼 렌더링마다 배열이 새로 생성되는 게 아니라, maxPrice가 변할때만 fruits배열을 새로생성해 전달
    const fruits = useMemo(()=>FRUITS.filter(item=>item.price<=maxPrice),[
        maxPrice
    ])
    return (
        <>
            <Select 
              option={fruits} 
              select={select}
              onChange={onChange}
            />
        </>
    )
}
// 1~4까지는 값이 너무 자주 변경되서 불필요한 렌더링때문에 성능에 영향을 미친 경우