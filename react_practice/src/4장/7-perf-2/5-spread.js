import React,{useState,useRef,useEffect} from 'react';

export default function App () {
    const [city,setCity] = useState(['Seoul','Gwang-ju','Jeju']);
    const [newCity,setNewCity] = useState('');
    const inputRef = useRef();
    const addCity = () =>{
        //1.데이터가 바뀌어야 하는데 제대로 바뀌지 않는 경우(state가 객체(혹은 배열)형태일때 잘못된 변경)
        //이는 데이터와 UI의 불일치를 불러일으킴
        //기존 배열에 push/unshift해주면 배열의 reference가 변하지 않고, 이는 리액트 입장에서 새로운 상태값이라 인식되지 X=>컴포넌트 함수 다시 실행하지 않는다
        city.push(newCity);
        setCity(city);
        
        //2.state가 객체(혹은 배열)일때 올바른 변경
        // ...통해 객체(배열)를 새로 update해야(새로운 reference를 가진 객체를 만들어야 리액트가 인식 후 리렌더링하므로)
        //배열에 그냥 push/unShift하면 reference 안 바뀌므로 리액트가 새로운 상태라고 인식하지 못하기에, ...(spread operator)를 사용해서 새로운 reference를 가진 객체를 만들어주자! 
        //객체도 {...}통해 새로운 reference가진 객체를 생성하자
        setCity([...city,newCity]) // [...city,newCity]는 새로운 reference를 갖는 배열이므로 이제 리액트는 상태가 변했다고 인식하고 컴포넌트 함수를 재실행하기에 컴포넌트가 최신의 데이터로 리렌더링 된다
        
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



//올바르지 않은 상태 변경
const addCity = () =>{
    city.push(newCity);
    setCity(city);    
}
//올바른 상태 변경
const addCity = () =>{
    setCity([...city,newCity]) // [...city,newCity]는 새로운 reference를 갖는 배열이므로 이제 리액트는 상태가 변했다고 인식하고 컴포넌트 함수를 재실행하기에 컴포넌트가 최신의 데이터로 리렌더링 된다
}