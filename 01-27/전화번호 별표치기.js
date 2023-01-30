function solution(phone_number) {
    var answer = '';
    var a = phone_number.split('');
    console.log(a)
    for(let i = 0; i < a.length-4; i ++){
        a[i] = '*';
    }
    a = a.join('');
    console.log(a)
    return answer;
}

solution("01033334444")