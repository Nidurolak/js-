function solution(s) {
    s = 'asdfgr'
    var answer = '';
    //나머지가 0, 짝수로 딱 맞아떨어진다면
    if(s.length % 2 == 0){
        a = s.length / 2
        b = s.length / 2 + 1
        c = s.slice(a, b);
        console.log(c);
        answer = a + b;
    }
    return answer;
}