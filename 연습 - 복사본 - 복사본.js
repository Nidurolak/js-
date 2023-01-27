function solution(strings, n) {

    strings.sort(function (a, b){
        let aa = a.charAt(n);
        let bb = b.charAt(n);

        if(aa > bb) return 1;
        if(aa < bb) return -1;
        if(aa === bb) return 0;

    })
    return strings;
}

    /*for(let i = 0; i < strings.length; i++){
        //n을 써먹어야 하는데....
        let a = strings[i].charAt(n);
        console.log(strings[i] + '에서 찾아낸'+ n + '번째 문자열은 '+ a);
    }*/
console.log(solution(["cdx", "abce", "abcd", ], 2));
