import React,{useState} from 'react'
import Title from './Title';

function Counter() {
    const [count,setCount]=useState(0);
    const [count2,setCount2] = useState({
        value : 0
    })
    const handleBtn1 = () => setCount(count+1);
    const handleBtn2 = () => setCount2({...count2,value:count2.value+1});
    return (
        <div>
            <Title title={`현재 카운트 : ${count2.value}`} />
            <button onClick={handleBtn1}>증가1</button>
            <button onClick={handleBtn2}>증가2</button>
        </div>
    )
}

export default Counter
