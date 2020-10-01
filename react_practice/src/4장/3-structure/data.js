const FRIENDS = [
    {name:'Seoul',age:20},
    {name:'Soong-sil',age:25},
    {name:'Suji',age:13},
    {name:'Lite',age:50}
]
let nextId = 0;
export default function getNextFriend () {
    return {...FRIENDS[nextId%4],id : nextId++}
}