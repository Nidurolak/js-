function solution(array) {
var sum = 0;
for (var i = 0; i < array.length; i++) sum += array[i];
console.log(sum / array.length);
}

solution([5,5])