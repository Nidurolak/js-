function solution(n) {
    console.log(parseInt(n.toString().split('').sort().reverse().join('')))
    return parseInt(n.toString().split('').sort().reverse().join(''));
}

solution(11888372)