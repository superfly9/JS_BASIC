import React,{useState} from 'react'
import {unstable_batchedUpdates} from 'react-dom';
import Title from './Title';

function Counter() {
    const [count,setCount]  = useState({value : 0});
    const Count1 = () => {
        setCount({
            ...count,
            value : count.value+1
        })
        setCount({
            ...count,
            value : count.value+1
        })
    }
    //리액트 요소 바깥에서 실행되는 함수는 batch로 실행X => 따라서 count 2씩 증가
    //batch로 처리하고 싶다면 ?
    /* 
        const Count1 = () => {
        ReactDOM.unstable_batchedUpadtes(
            ()=>setCount({
            ...count,
            value : count.value+1
        })
        setCount({
            ...count,
            value : count.value+1
        }))
    }
    */
    useEffect(() => {
        window.addEventListener('click',Count1);
        return ()=>window.removeEventListener('click',Count1);
    }, [])
    return (
        <div style={{margin:'3rem',padding:'1rem'}}>
            <button style={{margin:'.3rem'}} onClick={Count1}>Button1 {count.value}번 클릭</button>
        </div>
    )
}

export default Counter
