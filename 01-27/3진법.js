function solution(n) {
    var answer = 0;

    n = n.toString(3).split('').reverse();
    console.log(n + ' sdasgfsz')
    var a = 1;
   for(let i = n.length -1; i >= 0; i--){
        console.log(parseInt(n[i]) * (3 * a))
       answer += parseInt(n[i]) * a
        a *= 3
    }

    console.log(answer+ ' sdasgfsz');
    return answer;

}
solution(125);