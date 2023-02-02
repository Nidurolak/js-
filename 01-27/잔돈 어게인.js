function solution(num){
    var answer = 1000 - num;
    var coin = 0;
    if(answer >= 500){
        answer -= 500;
        coin += 1;
    }
    if(answer <= 499){
        coin += Math.floor(answer / 100)
        answer -=  Math.floor(answer / 100) * 100
    }
    if(answer <= 99){
        coin += Math.floor(answer / 50) 
        answer -= Math.floor(answer/ 50) * 50
    }
    coin += Math.floor(answer/ 10)
    answer -= Math.floor(answer/ 10) * 10
    coin += answer;
    return coin;
}
let num1 = 160;
console.log(solution(num1))