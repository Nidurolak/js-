function solution(s) {
    var answer = '';
    //나머지가 0, 짝수로 딱 맞아떨어진다면
    if(s.length % 2 == 0){
        //slice로 중간값의 앞 뒤로 잘라온다
        answer = s.slice(s.length / 2 -1, s.length / 2 + 1);
    }
    //홀수라면
    else{
        //중간값의 소수점을 버린 값을 가져온다.
        answer = s.charAt(Math.floor(s.length / 2))
    }
    console.log(answer);
    return answer;
}
solution('qwer');