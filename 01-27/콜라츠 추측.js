function solution(num) {
    var answer = 0;
    var b = 0;
    while(num != 1){
        num % 2 == 0 ? num /= 2 : num = num * 3 + 1
        if( b != 500) b++
        else return -1
    }
    console.log(num)
    return b;
}

solution(626331)