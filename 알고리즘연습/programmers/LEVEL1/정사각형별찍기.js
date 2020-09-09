//내 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 1; i<=b;i++) {
        let str = '';
        for (let j =1 ;j<=a;j++) {
            str += '*';
        }
        console.log(str);
    }
});

//다른 사람의 좋았던 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    //str.repeat을 잘 생각해봐야겠다
    const star = `${'*'.repeat(a)}\n`;

    console.log(star.repeat(b));
});