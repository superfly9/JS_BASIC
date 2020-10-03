import React,{useState,useEffect} from 'react';

export default function App () {
    const [flag,setFlag] = useState(false);
    useEffect(() => {
        setTimeout(()=>setFlag(!flag),1000);
        //setTimeout(()=>setFlag(prev=>!prev),1000);
    })
    if (flag) {
        return (
            <div>
                <Counter />
                <p>서울</p>
                <p>아름다운 밤</p>
            </div>
        )
    } else {
        return  (
            <span>
                <Counter />
                <p>Seoul</p>
                <p>아름다운 밤</p>
            </span>
        )   
    }
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