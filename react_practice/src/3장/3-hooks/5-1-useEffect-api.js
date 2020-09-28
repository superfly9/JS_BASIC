import React,{useState,useEffect} from 'react';

function Profile ({userId}) {
    const [user,setUser] = useState(null);
    useEffect(()=>{
        console.log('userId:',userId)
        getUserApi(userId)
            .then(data=>{
                console.log('data:',data)
                setUser(data)});
    })
    return (
        <div>
            {!user && <p>유저 정보를 가져오는 중...</p>}
            {user && (
                <>
                    <p>{`name is ${user.name}`}</p>
                    <p>age is {user.age}</p>
                </>
            )}
        </div>
    )
}


const USER1 = {name:'React',age:33};
const USER2 = {name:'Vue',age:56};
function getUserApi (userId) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(userId % 2 ? USER2 : USER1);
        },500)
    })
}

export default Profile;