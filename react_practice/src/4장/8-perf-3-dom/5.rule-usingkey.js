import React,{useState,useEffect} from 'react';

export default function App () {
    const [flag,setFlag] = useState(false);
    useEffect(() => {
        setTimeout(()=>setFlag(prev=>!prev),1000);
    })
    const fruits = flag ? FRUIT1 : FRUIT2
    return (
        <div>
            {fruits.map((item,index)=>(
                <>
                {/* key값은 유일한 값으로 줘야,
                    <p key={index}>{item}</p>  <= 이렇게 key값 주지 말자
                    이렇게 순서값으로 key를 주면 배열 원소의삭제,
                    추가에 따라 값은 같아도 key값이 달라지므로 효율적인 렌더링이 안된다
                    그렇기에 key값을 중복될리 없는  값 item으로 전달
                */}
                <p key={item}>{item}</p>
                </>
            ))}
        </div>
    )
}

const FRUIT1 = ['사과','딸기'];
const FRUIT2 = ['사과','딸기','바나나'];
    