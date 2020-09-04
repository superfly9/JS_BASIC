import React, { Fragment,useState } from 'react'

function Todo() {
    const [todoList,setTodo] = useState([]);
    const [currentId,setCurrentId] = useState(1);
    const [descValue,setDescValue] = useState('');

    const handleDelete = () =>{

    }
    const renderTodo = todoList.map((todoInfo,index)=>(
            <li key={index+1} className='todo_list'> 
                <span>{todoInfo.descValue}</span>
                <button data-id={currentId} onClick={handleDelete}>삭제</button>
            </li>
    ))
    const addTodo = (e) =>{
        const todo = {
            currentId , 
            descValue
        }
        setTodo([...todoList,todo])
        setCurrentId(currentId+1);
        console.log(e,e.currentTarget)
    }
    const handleChange = (e) => setDescValue(e.currentTarget.value); 
    return (
        <div>
            <h3>할 일 목록</h3>
            <ul>
                {renderTodo}
            </ul>    
            <input value={descValue} onChange={handleChange} />
            <button onClick={addTodo}>추가</button>
        </div>
    )
}

export default Todo
