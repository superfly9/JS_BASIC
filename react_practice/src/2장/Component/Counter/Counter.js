import React,{useState} from 'react'
import Title from './Title';

function Counter() {
    const [count,setCount]  = useState(0);
    const [count2,setCount2] = useState(10);
    const Count1 = () => setCount(count+1);
    const Count2 = () => setCount2(count2+1);
    return (
        <div>
            <Title title = {`Seoul ${count2}`} />
            <button onClick={Count1}>{count}</button>
            <button onClick={Count2}>{count2}</button>
        </div>
    )
}

export default Counter
