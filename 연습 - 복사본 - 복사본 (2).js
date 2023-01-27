    let result = 0;


 function solution(babbling) {
     let words = ['aya', 'woo', 'ye', 'ma']

     for (let i = 0; i < babbling.length; i++) {
         for (let x = 0; x < words.length; x++) {

             babbling[i] = babbling[i].replace(words[x], '@');
             console.log(babbling[i] + "이 남은 결과값 df  " + x);
         }
         babbling[i] = babbling[i].replace( /@/g , '');
             console.log(babbling[i] + "이 남은 최종 결과값");
         if (babbling[i] === '') {
             result++;
         }
     }
        return (result);
        consol.log(result);
 }

 console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
