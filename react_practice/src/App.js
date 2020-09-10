import React,{useState, useEffect} from 'react';

export default function App () {
    const [seconds,setSeconds] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setSeconds(seconds+1);
        },1000);
    })
    return (
        <div>지금까지 {seconds}초가 지났습니다</div>
    )
}