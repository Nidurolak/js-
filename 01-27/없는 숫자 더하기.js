function solution(numbers) {
    var answer = -1;
    answer = 45;
    for(let i = 0; i < numbers.length; i++){
        answer -= numbers[i]
    }
    console.log(answer)
    return answer;
}

solution([1,2,3,4,6,7,8,0])