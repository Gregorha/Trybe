function verifyLastLetters(str, end){
    string = str.split("");
    lastLetters = end.split("");
    for (let i = 0; i < lastLetters.length; i++){
        if (string[str.length-i-1] != lastLetters[end.length-i-1]){
            return false;
        }
    }
    return true;
}
console.log(verifyLastLetters("joaofernando", "fernando"));