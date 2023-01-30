function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0 ; i < absolutes.length; i++){
        a = 0;
        if(signs[i] == true){
            a += absolutes[i]
        }
        else
        a -= absolutes[i]
    }
    return answer;
}

solution([4,7,12], [true, false, true])