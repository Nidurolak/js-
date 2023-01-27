const x = 1;

// 1
function outer() {
    const x = 10;
	//function으로 감쌌으니 여기의 x는 상위 스코프인 outer의 x를 가져온다.
    const inner = function () { console.log(x) };
    return inner;
}


console.log(x) // 1
const innerFunc = outer(); // 10
innerFunc();
