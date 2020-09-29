import React,{useState,useEffect} from 'react';
import WidthPrinter from './6-1-useEffect-event';

export default function App () {
  const [count,setCount] = useState(0);
  return (
    <>
      {count === 0 && <WidthPrinter />}
      <button onClick={()=>setCount(count+1)}>클릭</button>
    </>
  )
}