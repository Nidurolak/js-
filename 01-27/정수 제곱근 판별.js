function solution(n) {
    var answer = 0;
    var a = Math.sqrt(n)
    if(Math.floor(a) != a) answer = -1;
    else answer = Math.pow(a + 1, 2)
    return answer;
}

solution(10) 