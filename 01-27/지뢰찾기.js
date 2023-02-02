function solution(N, arr1){
    let Minefield = [[]];

    for(let i = 0 ; i < N; i++){
        Minefield[i] = []
        for(let x = 0 ; x < arr1[i].length; x++){
            if(arr1[i][x] != '.'){
                Minefield[i].push('*')
            }
            else{
                let a= 0;
                for(let y = x-1; y < x+2; y++){
                    if(i - 1 >= 0 && arr1[i - 1][y] != undefined && arr1[i - 1][y] != '.')
                    {
                        a += parseInt(arr1[i - 1][y])
                    }
                    if(arr1[i][y] != undefined && arr1[i][y] != '.')
                    {
                        a += parseInt(arr1[i][y])
                    }
                    if(i + 1 < N && arr1[i + 1][y] != undefined && arr1[i + 1][y] != '.')
                    {
                        a += parseInt(arr1[i + 1][y])
                    }
                }
                a >= 10 ?Minefield[i].push('M') :Minefield[i].push(a.toString())
            }
        }
    }
    return Minefield;
}
let N = 5;
let arr1=[['.', '.', '.', '.', '.'], 
		['.', '.', '3', '.', '.'], 
		['.', '.', '.', '.', '.'],
		['.', '4', '.', '.', '.'], 
		['.', '.', '.', '9', '.']]; 
console.log(solution(N, arr1))