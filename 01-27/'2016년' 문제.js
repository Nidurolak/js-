function solution(a, b) {
    var answer = new Date(2016, a -1, b);
    const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let week = WEEKDAY[answer.getDay()];
    console.log(week);
    return answer;

}

solution(5, 24)