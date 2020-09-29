import React,{useState,useEffect} from 'react';

export default function useMounted () {
    const [mounted,setMounted] = useState(false);
    useEffect(()=>{
        //컴포넌트가 렌더링 되었는지 여부를 판단하는 Hooks
        //컴포넌트 렌더링 완료시 setMounted(true)가 된다
        setMounted(true);
    },[])
    return mounted;
}