
function fizzBuzz(start, end, skip){
    array = []
    for (let x = start;x<end+1;x++){
        if (x.toString().includes(skip.toString())== false){
        array.push(x)  
        }

    }
    return array
    // Your code here!
}

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;