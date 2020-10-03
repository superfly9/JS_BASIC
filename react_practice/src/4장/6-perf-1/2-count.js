import React,{useState} from 'react';
import PropTypes from 'prop-types';

MyComponent.propTypes = {
    value2 : PropTypes.number,
    value1 : PropTypes.number
}

export default function App () {
    const [value1,setValue1] = useState(0);
    const [value2,setValue2] = useState(10);
    return (
        <div>
            <button onClick={()=>setValue1(value1+1)}>value1 증가</button>
            <button onClick={()=>setValue2(value2+1)}>value2 증가</button>
            <MyComponent value2={value2} />
        </div>
    )
}

function MyComponent ({value2}) {
    console.log('MyComponent Rendering')
    console.log(value2)
    return (
        <>
            {/* <p>{`value1값: ${value1}`}</p> */}
            <p>{`value2값 : ${value2}`}</p>
        </>
    )
}
//속성값(props) 비교 함수
// function isEqual (prevProps, nextProps) {
//     console.log('prevProps:',prevProps)
//     console.log('nextProps:',nextProps)
//     return true
// }
React.memo(MyComponent);