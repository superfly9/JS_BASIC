let s = 'hackerhappy';
let t = 'hackerrank';
let k = 9;

let f = 'abc';
let g = 'def';
let kk = 6;

function appendAndDelete(s, t, k) {
    let count = 0;
    for (let i=0;i<s.length;i++) {
        console.log(i,count);
        if (s[i] !== t[i]) count++;
    }
    let sum = s===t ? (s.length)*2+1 : t.length-(s.length-count);
    console.log('sum:',sum);
    count = count+sum;
    console.log(count);
    return count <= k ? true : false;
}

console.log(appendAndDelete(s,t,k));