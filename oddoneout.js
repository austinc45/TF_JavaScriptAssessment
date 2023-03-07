function oddOneOut(arrOfInts){
    let answer = -1
    for (let x = 0; x<arrOfInts.length;x++){
        if (arrOfInts[x]%2==1){
            answer= arrOfInts[x]
            break
        }
    }
    return answer
}


// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;
