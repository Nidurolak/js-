function solution(s) {
    var answer = true;
    var a = s.split('')
    if(a.length == 4 || a.length == 6){
        for(let i = 0; i < a.length; i++){
            //a[i]가 숫자인지 아닌지 체크
            for(let x = 0 ; x < 9; x++){
                if(a[i] == x){
                    a.splice(i, 1);
                    console.log(a);
                }
            }
        }
        if(a.length != 0){
            return false
        }
        return answer;
    }
    return false
}
solution('a1234')