const FRIENDS = [
    {name:'Soong-sil',age:25},
    {name:'Korea',age:13},
    {name:'Seoul',age:20},
    {name:'Lite',age:50}
]
let nextId = 0;
export default function getNextFriend () {
    return {...FRIENDS[nextId%4],id : nextId++}
}

// getNextFriend() => 객체 반환