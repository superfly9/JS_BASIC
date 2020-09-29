import React,{useState,useEffect} from 'react';
import useUser from './useUser';

const Profile = ({userId}) => {
    const user = useUser(userId);
    console.log(user);
    return (
        <div>
            {!user&&<p>유저 정보 가져오는중...</p>}
            {user && (
                <>
                    <p>{`name is ${user.name}`}</p>
                    <p>age is {user.age}</p>
                </>
            )}
        </div>
    )
}
export default Profile;