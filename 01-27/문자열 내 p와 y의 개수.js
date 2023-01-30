function solution(s){
    var answer = true;
    var a = s.split('')
    console.log(a);
    var b = 0;
    var c = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] == 'p' || a[i] == 'P'){
            b++
        }
        else if(a[i] == 'y' || a[i] == 'Y'){
            c++
        }
    }
    if(b == c || (b == 0 && c == 0)){
        answer = true
    }
    else
    answer = false;
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(answer)

    return answer;
}
solution("pPoooyY")