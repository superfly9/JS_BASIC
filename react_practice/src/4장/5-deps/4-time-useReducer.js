import React,{useEffect,useReducer} from 'react';

export default function App () {
    return (
        <Timer  initialTotalSeconds={3373} />
        )
    }
//현재 상황 : 상태 값이 여러개일때(hour,minite,second) 의존성 배열에 값이 3개나 들어감, 의존성 배열을 사용 안 할수 있을까?=>state에서 다룰 값이 많기에 useReducer도입
//기능 : 주어진 시간을 시/분/초로 환산 후 1초씩 남은 시간이 줄어드는 타이머
function Timer ({initialTotalSeconds}) {
    const [state,dispatch] = useReducer(reducer,{
        hour : Math.floor(initialTotalSeconds/3600),
        minutes : Math.floor((initialTotalSeconds%3600)/60),
        second : Math.floor(initialTotalSeconds%60)
    })
    useEffect(() => {
        const id = setInterval(()=>{
            dispatch(state)
        },1000);
        return ()=>clearInterval(id)
    })
    return (
        <div>{hour}시:{minutes}분:{second}초</div>
    )
}

function reducer (state) {
    //action은 사용 X
    console.log(state);
    const {second,minutes,hour} = state;
    if (second) {
        return {...state,second:second-1}
    } else if (minutes) {
        return {...state,minutes:minutes-1,second:59}
    } else {
        return {...state,hour:hour-1,minutes:59,second:59}
    }
}