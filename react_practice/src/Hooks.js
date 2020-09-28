import React,{useState,useEffect} from 'react';

function MyComponent () {
    const [value,setValue] = useState(0);
    // 1. if문 안에서 Hooks 사용 X
    if (value===0) {
        const [v1,setV1] = useState(1);
    } else {
        const [v2,setV2] = useState(2);
        const [v3,setV3] = useState(3);
    }
    // 2. for문 안에서도 Hooks사용 X
    for (let i=0;i<value;i++) {
        const [num,setNum] = useState(i)
    }
    // 3. 함수 안에서도 Hooks사용 X
    function func () {
        const [seoul,setSeoul] = useState('Lite');
    }
}

function Profile ({id}) {
    //return 값 다음에도 쓰지 말자, 이러면 조건 따라 Hooks의 실행 횟수/순서가 달라지기에
    const [userId,setUserId]  = useState(null);
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
    if (!user) {
        return null;
    }

    const [value,setValue] = useState(1);
    
    return (
        <div></div>
    )
}

function Profile ({id}) {
    //다음과 같이 return값은 return끼리 인접하게 붙여서 쓰도록 했다.
    const [userId,setUserId]  = useState(null);
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

    const [value,setValue] = useState(1);
    
    if (!user) {
        return null;
    }
    //return값이 Hooks실행 후에 있기에 Hooks의 실행이 달라질 일이 없다
    return (
        <div></div>
    )
}