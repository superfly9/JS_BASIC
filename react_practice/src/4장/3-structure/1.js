import React,{useState} from 'react';

//ex)
const todos = [ 
    { name : 'seoul' ,key : 1 ,done:false },
    {name : 'lite' , key : 2 ,done:true},
    {name : 'Korea' , key : 3 ,done:false}
]

function App () {
    return (
        <div>
            <TodoList todos={todos} />
        </div>
    )
}

function TodoList({todos}) {
    const [doneList,setDoneList] = useState(todos.filter((item)=>item.done));
    function onChange (key,name) {
        setDoneList(
            doneList.map(item=>(item.key === key)  ? {...item,name} : item)
        )
        //자식 컴포넌트가 부모 데이터를 별도의 상태로 관리 중
        //자식 데이터와 부모 데이터의 싱크가 맞지 않는다.
    }
}