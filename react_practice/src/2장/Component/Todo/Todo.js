import React, {useState } from 'react'

function Todo() {
    // UI제외한 나머지 로직들을 다루는 부분
    const [todoList,setTodo] = useState([]);
    const [currentId,setCurrentId] = useState(1);
    const [descValue,setDescValue] = useState('');
    const [showOdd,setShowOdd] = useState(false);
    //odd - 홀수 / even - 짝수
    const handleDelete = (e) =>{
        const {target : {dataset : {id}}} =  e
        console.log(id,e.target.dataset)
        let todo = todoList.filter((item)=>item.currentId!==Number(id));
        //리스트 삭제 후
        // setTodo사용 => 다시 리렌더링
        setTodo(todo);
    }
    const addTodo = () =>{
        setTodo([...todoList,{
            description :descValue,
            currentId
        }])
        setDescValue('');
        setCurrentId(currentId+1);
    }
    const handleOdd = () => setShowOdd(!showOdd);

    //홀수 아이템만 보이게 하기, showOdd가 true가 되었을때 해당 목록의 index를 2로 나눈 나머지를 확인
    const renderTodo = todoList.filter((_ ,index)=> (showOdd ? index%2 === 0 : true )).map((todo,index)=>(
        <li key={todo.currentId}>
            <span style={{marginRight:'1rem'}}>{todo.description}</span>
            <button data-id={todo.currentId} data-pick='seoul' onClick={handleDelete}>
                Delete
            </button>
        </li>
    ))
    const handleChange = (e) => setDescValue(e.currentTarget.value); 
    return (
        //JSX=>UI담당(어떤 모습으로 렌더링될지를 결정)
        <div>
            <h3>할 일 목록</h3>
            <ul>
                {renderTodo}
            </ul>    
            <input value={descValue} onChange={handleChange} />
            <button onClick={addTodo}>추가</button>
            <button onClick={handleOdd}>홀수번째 아이템만</button>
        </div>
    )
}

export default Todo
