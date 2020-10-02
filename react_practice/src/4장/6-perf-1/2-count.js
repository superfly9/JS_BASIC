import React,{useState} from 'react';

export default function App () {
    const [value1,setValue1] = useState(0);
    const [value2,setValue2] = useState(0);
    return (
        <div>
            <button onClick={()=>setValue1(value1+1)}>value1 증가</button>
            <button onClick={()=>setValue2(value1+2)}>value2 증가</button>
            <MyComponent value1={value1} value2={value2} />
        </div>
    )
}

function MyComponent ({value1,value2}) {
    console.log('MyComponent Rendering')
    return (
        <>
            <p>{`value1:${value1}`}</p>
            <p>{`value2:${value2}`}</p>
        </>
    )
}
//속성값(props) 비교 함수
function isEqual (prevProps, nextProps) {
    console.log('prevProps:',prevProps)
    console.log('nextProps:',nextProps)
    return prevProps.value1 === nextProps.value1
}
React.memo(MyComponent,isEqual);
