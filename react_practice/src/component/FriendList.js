import React from 'react';

export default function FriendList ({friends}) {
    return (
        <div>
            <ul>
                {friends.map(friend=>(
                    <li key={friend.id}>
                        {`${friend.name} ${friend.age}`}
                    </li>
                ))}
            </ul>
        </div>
    )
}