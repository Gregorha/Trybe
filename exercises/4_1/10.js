let peca = "BisPo"
let movimento=""
peca = peca.toLowerCase()
switch(peca){
    case "rainha":
        movimento = "para todos os lados em qualquer número de casas"
        break;
        case "cavalo":
        movimento = "em L sempre 3 casas para um lado e 2 virando 90 graus ou vice-versa"
        break;
        case "bispo":
        movimento = "na diagonal quantas casas quiser"
        break;
        case "piao":
        movimento = "em L sempre 3 casas para um lado e 2 virando 90 graus ou vice-versa"
        break;
        case "rei":
        movimento = "em L sempre 3 casas para um lado e 2 virando 90 graus ou vice-versa"
        break;
}
console.log("O(a) "+peca+" se move "+ movimento);