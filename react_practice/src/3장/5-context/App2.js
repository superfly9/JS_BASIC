import React,{createContext,useContext} from 'react';

const AppContext = createContext();
export default function User () {
    const user = {
        name : 'Seung-chan',
        isAdmin : true
    }
    return (
        <div>
            <AppContext.Provider value={user}>
                <div>
                    <Posts />
                </div>
            </AppContext.Provider>
        </div>
    )
}

const PostContext = createContext();
const Posts = () => {
    const posts = [
        {
          title: 'useContext 알아보기',
          content: '이번 편에서는 React Context를 ...'
        }
      ]
    return (
        <div>
            <PostContext.Provider value={posts}>
                <Children />
            </PostContext.Provider>
        </div>
    )
}

const Children =  () => {
    const user = useContext(AppContext);
    const post = useContext(PostContext);
    let label = 'user';
    if (user.isAdmin) {
        label = 'admin'
    }
    return (
        <div>
            <div>{label}</div>
            <div>{user.name}</div>
            <div>{post.map((v,i)=>(
                <div key={i}>
                    <div>{post.title}</div>
                    <div>{post.content}</div>
                </div>
            ))}
            </div>
        </div>
    )
}