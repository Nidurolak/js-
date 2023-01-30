function solution(s) {
    var answer = '';

    var splitedWords = s.split(' ')
    for(let i = 0 ; i < splitedWords.length; i++){
        var a = splitedWords[i].split('');
        for(let x = 0 ; x < a.length; x++){
            if(x % 2 == 0){
                a[x] = a[x].toUpperCase();
            }
            else a[x] = a[x].toLowerCase();
            console.log(a[x]);
        }
        splitedWords[i] = a.join('');
    }
    var b = splitedWords.join(' ');
    console.log(b);
    return b;
}

solution("try hello worldZ")