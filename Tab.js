function sum(tab) {
    let somme = 0;
    for (let i = 0; i < tab.length; i++) {
        somme += tab[i];
    }
    return somme;   
}

function sum2(tab) {
    let result = 0;
    for (let value of tab){
        result += value;
    }
    return result;
}

function longestWord(tab){
    let size = 0;
    let posi = 0;
    for (let i = 0; i < tab.length; i++) {
        if(tab[i].length>size){
            posi = i;
            size = tab[i].length;
        }
        
    }
    return tab[posi];
}

function range(min,max,step) {
    let n = max-min;
    let t =[];
    let nb = min;
    for (let i = min; i < max + 1; i+=step) {
        t.push(nb);
        nb+=step;
    }
    return t;
}