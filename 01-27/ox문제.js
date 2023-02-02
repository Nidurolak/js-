/*
let input = require('fs').readFileSync('./text.txt').toString().split('\n');
let num = Number(input[0]);

for(let i = 1; i <= num; i++){
    let answer = 0;
    let count = 0;
    let container = input[i].split('')
    for(let x = 0 ; x < container.length -1; x++){
        if(container[x] == 'O'){
            count++            
        }
        else{
            count = 0;
        }
        answer += count;
    }

    console.log(answer);
    
}
 


var cars = [
    { type: 'Volvo', year: 2016 },
    { type: 'Saab', year: 2001 },
    { type: 'BMW', year: 2010 },
    ];
    var result;
    
    result = cars.sort((a, b) => (a.type < b.type ? -1 : 1));
    console.log(result);

    //arr.sort((a, b) => (a.type < b.type ? -1 : 1)); 이중 배열 sort시키기
    //[...arr].sort((a, b) => (a.type < b.type ? -1 : 1)); 이중 배열 안 배열의 원하는 위치 값으로 sort시키기
*/
//배열 다루는 법
    const arr = [
        ['b', 'a', 'c'],
        ['some', 'apple', 'car'],
        ];
        
        const bear = [];
        
        for (let i = 0; i < arr.length; i++) {
        bear.push(arr[i].sort((a, b) => (a < b ? -1 : 1)));
        }
        console.log(bear);