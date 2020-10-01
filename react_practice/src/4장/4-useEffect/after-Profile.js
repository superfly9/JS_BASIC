import {useEffect,useState} from 'react'
import useOnMounted from './useOnMounted';

//컴포넌트 렌더링 후 한번만 실행되는 훅 => useOnMounted라는 커스텀 훅 만들기로
function Profile({userId}) {
    const [user,setUser]  = useState([]);
    const [needDetail,setNeedDetail] = useState(false);
    useOnMounted(()=>fetchUser(userId,needDetail).then(data=>setUser(data)))
    return null;
}
function fetchUser(userId,needDetail) {
    return fetch(userId,needDetail)
            .then(response=>response.json());
}

export default Profile
