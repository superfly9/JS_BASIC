import React,{useState,useEffect} from 'react';

export default function App () {
    return (
        <Timer  initialTotalSeconds={3373} />
    )
}

//현재 상황 : 상태 값이 여러개일때(hour,minite,second) 이걸 어떻게 다룰 것인가?
//기능 : 주어진 시간을 시/분/초로 환산 후 1초씩 남은 시간이 줄어드는 타이머
function Timer ({initialTotalSeconds}) {
    const [hour,setHour] = useState(Math.floor(initialTotalSeconds/3600));
    const [minutes,setMinutes] = useState(Math.floor((initialTotalSeconds % 3600)/60))
    const [second,setSecond] = useState(initialTotalSeconds % 60)
    useEffect(() => {
        const id = setInterval(()=>{
            if (second) {
                setSecond(second-1)
            } else if (minutes) {
                setMinutes(minutes-1)
                setSecond(59)
            } else {
                setHour(hour-1)
                setMinutes(59)
                setSecond(59)
            }
        },1000)
        return () =>{
            if (second === 59) {
                console.log(hour,second,minutes)
                console.log('id:',id)
            }
            clearInterval(id);
        }
    }, [hour,minutes,second])
    return (
        <div>{hour}시:{minutes}분:{second}초</div>
    )
}