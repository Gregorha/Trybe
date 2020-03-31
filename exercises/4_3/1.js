function palimdrome(str){
    let letter = str.split("")
    for (let i = 0; i < letter.length; i++){
        if (letter[i] != letter[letter.length-i-1]){
            return false;
        }
    }
    return true
}

console.log(palimdrome("ovo"));