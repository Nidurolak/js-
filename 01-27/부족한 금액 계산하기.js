function solution(price, money, count) {
    var a = 0;

    for(let i = 1 ; i <= count; i++){
        a += price * i;
        console.log(a);
    }
    if(a > money){
        return (a -= money)
    }
    else return(money -= a)
    
}
solution(3, 20 , 4)