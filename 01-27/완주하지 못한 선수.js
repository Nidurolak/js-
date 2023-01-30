function solution(participant, completion) {
    /*for(let i = participant.length; i > 0 ; i--){
        for(let x = 0 ; x < completion.length; x++){
            if(participant[i] == completion[x]){
                participant.splice(i, 1)
                console.log(participant);
            }
        }
    }*/
    participant.sort();
    completion.sort();
    for(let i = 0 ; i < participant.length; i++){
        for(let x = 0 ; x < completion.length; x++){
            if(participant[i] == completion[x]){
                participant[i] = i
                console.log(participant);}
        }
    }
    return participant.join().replace(/,/gi,'').toString()
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])