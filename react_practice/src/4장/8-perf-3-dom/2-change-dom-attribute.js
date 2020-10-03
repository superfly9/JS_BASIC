import React,{useState,useEffect} from 'react';

export default function App () {
    const [flag,setFlag] = useState(false);
    useEffect(() => {
        setTimeout(()=>setFlag(prev=>!prev),1000);
    })
    return (
        <div className={flag ? 'yes' : 'no'}
            style={{color:'black',backgroundColor : flag ? 'pink' :'green'}}
        >
            <Counter />
            <p>서울</p>
            <p>아름다운 밤</p>
        </div>
    )
}

function Counter () {
    const [count,setCount] = useState(0);
    useEffect(() => {
        const id= setTimeout(()=>setCount(count=>count+1),100);
        return ()=>clearTimeout(id);
    })
    return (
        <div>
            <p>Count : {count}</p>
        </div>
    )
}