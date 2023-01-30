function solution(n)
{
    var answer = 0;
    var a = n.toString().split('');
    console.log(a);
    for(let i = 0 ; i < a.length; i++){
        var b = parseInt(a[i])
        answer += b;
        console.log(answer);
    }

    console.log(answer);
    return answer;
}

solution(123)