import React,{useState,useEffect} from 'react';
import Title from './2장/Component/Counter/Title';
import Batch from './3장/BatchAfter';

console.log(<Title color='red' awesome='Seoul' >Lite</Title>)

console.log(<a href='#' color='red'>링크</a>)

export default function App () {
  const [count,setCount] = useState(10);
  const handleClick =()=>setCount(count+1);
  //컴포넌트 렌더링 후 딱 1번만 실행,state업데이트 후 컴포넌트 리렌더링 되도 실행X
  useEffect(()=>{
    document.title = `업데이트 횟수 : ${count}`
  },[])

  //컴포넌트 렌더링시 첫 실행 + 리렌더링 시 계속 실행
  useEffect(()=>{
    document.title = `업데이트 횟수 : ${count}`
  })
  return (
    <button onClick={handleClick}>increase</button>
  )
}