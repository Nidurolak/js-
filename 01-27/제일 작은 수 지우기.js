function solution(arr) {
    a = [...arr]

    if(arr.length == 1){
        return [-1]
    }
    var answer = a.sort(function(a, b) { return b - a}).pop()
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === answer){
            arr.splice(i, 1)
        }
    }
    console.log(arr)
    return arr;
}

solution([3,4,1,2])