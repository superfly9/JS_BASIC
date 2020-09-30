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
          title: 'useContext에 깊이 빠져봅시다',
          content: '서울은 살기 좋은 유구의 도시입니다'
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
    console.log('user:',user);   //user: {name: "Seung-chan", isAdmin: true}
    console.log('post:',post); //post: [ {title: 'useContext에 깊이 빠져봅시다', content: '서울은 살기 좋은 유구의 도시입니다'}]
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
                    <div>{v.title}</div>
                    <div>{v.content}</div>
                </div>
            ))}
            </div>
        </div>
    )
}