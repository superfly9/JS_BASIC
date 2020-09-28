import React,{useState, useEffect} from 'react';

export default function App () {
    const [seconds,setSeconds] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            //setSeconds(seconds+1);
            setSeconds(v=>v+1);
        },1000);
    })
    //1초마다 seconds증가, 컴포넌트 리-렌더링시마다 useEffect실행
    //어떠한 state가 변화하더라도 useEffect실행 안되고,처음으로 DOM렌더링시에만 useEffect실행 되게 하고 싶다면,useEffect(()=>{},[]) 
    return (
        <div>지금까지 {seconds}초가 지났습니다</div>
    )
}