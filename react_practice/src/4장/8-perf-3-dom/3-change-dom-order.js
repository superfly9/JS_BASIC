import React,{useState,useEffect} from 'react';

export default function App () {
    const [flag,setFlag] = useState(false);
    useEffect(() => {
        setTimeout(()=>setFlag(prev=>!prev),1000);
    })
    if (flag) {
        //리액트의 가상돔 비교를 통해 앞의 두 요소는 변하지 않음을 알고, 바뀐 부분만 DOM에 반영함
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
            <p>아름다운 밤</p>
            {/* 이 부분만 추가/삭제됨 */}
            <p>좋은 날씨</p>
          </div>
        )
    }
}