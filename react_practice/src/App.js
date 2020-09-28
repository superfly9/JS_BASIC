import React,{useState,useEffect} from 'react';
import Profile from './3장/3-hooks/5-1-useEffect-api';
import Title from './2장/Component/Counter/Title';
import Batch from './3장/BatchAfter';
import WidthPrinter from './3장/3-hooks/6-1-useEffect-event';

export default function App () {
  const [count,setCount] = useState(0);
  return (
    <>
      {count === 0 && <WidthPrinter />}
      <button onClick={()=>setCount(count+1)}>클릭</button>
    </>
  )
}