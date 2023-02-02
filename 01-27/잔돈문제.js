const filePath = process.platform === 'linux' ? '/dev/stdin' : './text.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

console.log(input)

    var answer = 1000 - input;
    console.log(answer)
    var coin = 0;
    if(answer >= 500){
        answer -= 500;
        coin += 1;
        console.log(answer + " 500원 걸러짐")
    }
    if(answer <= 499){
        coin += Math.floor(answer / 100)
        answer -=  Math.floor(answer / 100) * 100
        console.log(answer + " 100원 걸러짐")
    }
    if(answer <= 99){
        coin += Math.floor(answer / 50) 
        answer -= Math.floor(answer/ 50) * 50
        console.log(answer + " 50원 걸러짐")
    }
    if(answer <= 49){
        coin += Math.floor(answer/ 10)
        answer -= Math.floor(answer/ 10) * 10
        console.log(answer + " 10원 걸러짐")
    }
    if(5 <= answer){
        coin += 1
        answer -= 5
        console.log(answer + " 5원 걸러짐")
    }
    coin += answer;
    console.log(coin + ' asdaddagggggg')
    return coin;