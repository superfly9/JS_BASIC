//의존성 배열은 가능한 사용하지 말자
//의존성 배열의 잦은 사용 대신 useEffect(effect)=> effect는 컴포넌트 렌더링 후 실행되기에
// effect함수 안에서 최신의 값들을 사용가능하므로, 여기서 로직 처리
import React,{useState,useEffect} from 'react';

//의존성 배열 사용시 코드
function Count1 () {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        const onClick = () =>setCount(count+1);
        window.addEventListener('click',onClick);
        return window.removeEventListener('click',onClick);
    },[count]);
}

//의존성 배열을 사용하지 않고, 그 전 state(여기서는 count)를 참조하려면 상태값 변경함수에 인자를 함수로 전달
//이때 이 전 state값이 매개변수로 전달되므로, 의존성 배열 삭제 가능
function Count2 () {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        const onClick = () =>setCount(v=>v+1);
        window.addEventListener('click',onClick);
        return window.removeEventListener('click',onClick);
    });
}