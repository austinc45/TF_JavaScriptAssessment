function strClean(arrayWords){
    let array = []
let newWord = ''
    for (let x = 0;x<arrayWords.length;x++){
        newWord = arrayWords[x].trim()
        array = newWord.split("")
        for(let i = 0;i<array.length;i++){
            if (isNaN(array[i])==false){
                if(array[i] == '1'){
                    array[i]='one'
                }else if (array[i] == '0'){
                    array[i]= 'zero'
                }else if (array[i]==' '){
                    array[i]= '_'
                }else{
                    array[i]=''
                }
            }
        }
        arrayWords[x]=array.join("")
    }
    return arrayWords
}



// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;