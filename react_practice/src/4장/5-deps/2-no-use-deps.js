import React, { useState } from 'react';

function Profile ({userId}) {
    const [user,setUser] = useState();
    async function fetchUserData(needDetail) {
        const data = await fetchUser(userId,needDetail);
        setUser(data);
    }
    //의존성 배열 사용대신,useEffect를 통해 렌더링 된 후 최신화 된 값을 가지고 함수 실행
    useEffect(() => {
        if (!user || user.id!==userId) {
            fetchUserData(false);
        }
    })
}