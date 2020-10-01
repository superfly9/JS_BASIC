import {useEffect,useState} from 'react'

//컴포넌트 렌더링 후 한번만 실행되는 훅, useEffect(effect,[])로 사용대신 => useOnMounted라는 커스텀 훅을 만들자
function Profile({userId}) {
    const [user,setUser]  = useState([]);
    const [needDetail,setNeedDetail] = useState(false);
    useEffect(()=>{
        fetchUser(userId,needDetail).then(data=>setUser(data))
    },[])
    return null;
}
function fetchUser(userId,needDetail) {
    return fetch(userId,needDetail)
            .then(response=>response.json());
}

export default Profile
