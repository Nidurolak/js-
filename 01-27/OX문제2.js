function solution(str){
	let answer= 0;
    let count = 0;
    let container = str.split('')
    for(let x = 0 ; x < container.length; x++){
        container[x] == 'O' ?count++ :count = 0;
        answer += count;
    }
	return answer;
}
let str="OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str))