function solution(x) {
    var answer = true;
    a = x.toString().split('')
    b = 0;
    for(let i = 0 ; i < a.length; i++){
        b += parseInt(a[i])
    }
    console.log(b);
    //0으로 바로 나누어떨어지지 않는다면
    x % b == 0 ?answer = true :answer = false
    console.log(answer);
    return answer;
}

solution(10)