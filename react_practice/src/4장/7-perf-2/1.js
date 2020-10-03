import React,{useState} from 'react';

function Parent () {
    const [count,setCount] = useState(0);
    const [fruit,setFruit] = useState(null);
    return (
        <div>
            <p>{`count : ${count}`}</p>
            <button onClick={()=>setCount(count+1)}>1씩 증가</button>
            <SelectFruit    
                selected = {fruit}
                //이런 식으로 주면 컴포넌트 생성시마다 onChange안의 함수가 변경됨
                //onChange는 SelectFruit의 props기에 따라서 SelectFruit가 불필요하게 다시 렌더링됨
                onChange = {fruit=>setFruit(fruit)}
            />
        </div>
    )
}

function SelectFruit () {}