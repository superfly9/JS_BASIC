import React,{useState} from 'react';

function Seoul () {
    //비즈니스 로직
    const [todoList,setTodo] = useState([]);
    const [currentId, setCurrentId] = useState(0);
    const [descValue,setDescValue] = useState('');
    const [showOdd,setShowOdd] = useState(false);

    const onAdd = (e) =>{
        e.preventDefault();
        setDescValue('');
        setTodo([...todoList,{
            currentId : todoList.length+1,
            description : descValue
        }])
        //데이터 추가=>추가한 데이터 렌더링 필요 , 삭제 + 필터링 기능
    }
    const handleChange = (e) =>{
        setDescValue(e.currentTarget.value);
    }
    const handleDelete = (e) => {
        const id = e.target.dataset.id;
        let result  =todoList.filter(v=>v.currentId!==Number(id));
        console.log(result)
        setTodo(result)
    }
    return (
        // UI다루는 부분
        <div>
            <h3>할 일</h3>
            <form onSubmit={onAdd}>
                <input value={descValue} onChange={handleChange}/>
                <button>Submit</button>
            </form>
            <ul>
                {/* 홀수만 */}
                {todoList.filter((_,i)=> showOdd ? i%2 === 0 : true  ).map(item=>
                <li key={item.currentId} onClick={handleDelete}>
                   <span>{item.description}</span>
                   <button data-id={item.currentId}>Delete</button>
                </li>
                )}
            </ul>
        </div>
    )
}

export default Seoul;