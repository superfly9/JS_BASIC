import React,{useRef} from 'react';

function MyComponent1 ({onClick}) {
    useEffect(() => {
        window.addEventListener('click',()=>{
            onClick();
        })
        //onClick이 변할때마다 component 리 렌더링,onClick이 변한다는 건, 코드 로직이 변한다는 걸 의미
    }, [onClick])
}


function MyComponent2 ({onClick}) {
    //useEffect()에서 사용된 ref객체는 의존성 배열에 추가할 필요 없기에
    //다음과 같이 useRef통해 의존성 배열 제거 가능 
    const onClickRef = useRef();
    useEffect(() => {
        onClickRef.current  = onClick;
    })
    useEffect(() => {
        window.addEventListener('click',()=>{
            onClickRef.current()
        })
    })
}