import React,{useState,useRef,useEffect} from 'react';

export default function App () {
    const [city,setCity] = useState(['Seoul','Gwang-ju','Jeju']);
    const [newCity,setNewCity] = useState('');
    const inputRef = useRef();
    const addCity = () =>{
        setCity([...city,newCity])
         //state가 객체일때 올바르게 값을 update(새로운 reference를 가진 객체를 만들어야 리액트가 인식 후 리렌더링)하려면
         // ...(spread operator)를 사용해서 새로운 reference를 가진 객체를 만들어주자! 배열에 그냥 push/unShift하면 reference 안 바뀌므로 리액트가 새로운 상태라고 인식하지 못하기에
         setNewCity('');
    }
    useEffect(() => {
        //input.current => input 
        //input.current.parentNode => <div id='root'></div>
        inputRef.current.focus();
    }, [city])
    return (
        <>
            <City 
              option={city} 
            />
            <input ref={inputRef} value={newCity} onChange={(e)=>setNewCity(e.target.value)}/>
            <button onClick={addCity}>도시 추가</button>
        </>
    )
}

function City ({option}) {
    return (
        <ul>
            {option.map((item,index)=>(
                <li key={index+1}>{item}</li>
            ))}
        </ul>
    )
}