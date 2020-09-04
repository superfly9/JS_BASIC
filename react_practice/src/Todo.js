import React, { Fragment,useState } from 'react'

function Todo() {
    const [todo,setTodo] = useState([]);
    const [currentId,setCurrentId] = useState(1);
    const [value,setValue] = useState('');
    const renderToto = todo.map((todoInfo,index)=>(
        <Fragment>
            <li key={index+1} className='todo_list'> 
                {todoInfo}
            </li>
            <button>삭제</button>
        </Fragment>
    ))
    const addTodo = (e) =>{
        console.log(e,e.currentTarget)
    }
    const handleChange = (e) => setValue(e.currentTarget.value); 
    return (
        <div>
            <input onChange={handleChange} />
            <button onClick={addTodo}>추가</button>
            <ul>
                {renderToto}
            </ul>    
        </div>
    )
}

export default Todo
