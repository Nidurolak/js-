function solution(arr1, arr2) {
    var answer = arr1;

    for(let i = 0 ; i < arr1.length; i++){
        for(let x = 0 ; x < arr1[i].length; x++){
        answer[i][x] = arr1[i][x] + arr2[i][x]
        } 
    }
    return answer;
}