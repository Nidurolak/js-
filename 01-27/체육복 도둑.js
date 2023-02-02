function solution(n, lost, reserve) {
    var answer = n- lost.length;
    var remainReserve = reserve.filter(function(value){
        if( lost.find(lostvalue => lostvalue == value) == undefined){
            console.log('asdassad')
            return value;
        }
       else return -1;

    })
    console.log(remainReserve + 'asdassad')
    console.log(answer + '이게 기본값')

    for(let i = 0; i < lost.length; i++){
        var check = false
        for(let x = 0; x < reserve.length; x++){
            if(reserve[x] == lost[x]){
                reserve[x] = -1
            }

        }
        console.log(lost[i] + '번 시험에 들어간다~')
        for(let x = 0; x < reserve.length; x++){
            if((lost[i] -1 == reserve[x] || lost[i]+1 == reserve[x]) && lost[i] != reserve[x]){
                check = true
                reserve[x] = -1;
            }
        }
        if(check == true) {
            
            console.log(lost[i] + '번 통과~')
            answer ++
        }
    console.log(answer);
    }
return answer;
}
solution(5, [3, 4], [3])