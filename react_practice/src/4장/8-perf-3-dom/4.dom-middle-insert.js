import React,{useState,useEffect} from 'react';

export default function App () {
    const [flag,setFlag] = useState(false);
    useEffect(() => {
        setTimeout(()=>setFlag(prev=>!prev),1000);
    })
    if (flag) {
        return (
          <div>
            <p>서울</p>
            <p>아름다운 밤</p>
          </div>
        )
    } else {
        return (
          <div>
            <p>서울</p>
            {/* 좋은날씨 , 아름다운 밤이 다 삭제되고 다시 추가됨 
                즉 세로운 요소가 중간에 추가되면 리액트는 그 뒤의 변경되지 않은 요소는 감지 못한다(리액트가 요소의 순서를 통해 비교를 하기에)
                결국 변화를 알기 위해 이전 가상돔과 새로운 가상돔을 하나씩 다 비교해야 하는데 이는 비효율적
                따라서 key값을 줌으로써 효율적인 가상돔 비교를 한다
            */}
            <p>좋은 날씨</p>
            <p>아름다운 밤</p>
          </div>
        )
    }
}


export default function App2 () {
    const [flag,setFlag] = useState(false);
    useEffect(() => {
        setTimeout(()=>setFlag(prev=>!prev),1000);
    })
    if (flag) {
        return (
          <div>
            <p key='seoul'>서울</p>
            <p key='night'>아름다운 밤</p>
          </div>
        )
    } else {
        return (
          <div>
            <p key='seoul'>서울</p>
            {/* 이렇게 key값을 주면, 리액트가 같은 key값을 가진 요소끼리 비교를 하기에 
                아름다운 밤의 삭제 없이 좋은 날씨 요소만 추가할 수 있다
            */}
            <p key='good-day'>좋은 날씨</p>
            <p key='night'>아름다운 밤</p>
          </div>
        )
    }
}