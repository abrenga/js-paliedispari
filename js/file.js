let giochi = [
    {
        nome: "palindromo",
        esercizio: palindromo

    },

    {
        nome: "pari o dispari",
        esercizio: pariODispari

    }
];



function palindromo(parametro) {
    let reverse = parametro.split("").reverse().join("");
    if (reverse == parametro) {
        alert("è palidromo");
    } else {
        alert("non è palidromo");
    }

}


function pariODispari() {
    let numeroInserito = parseInt(prompt("inserisci numero"));
    let pariDisapriStr = prompt("scrivi se è pari o dispari")
    let randomNum = estrapolaNumRandom();
    let somma = numeroInserito + randomNum;
    verificaCondizione(somma, pariDisapriStr);

}
function estrapolaNumRandom() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(5);
    let numeroRandom = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
    return numeroRandom;
}


function verificaCondizione(somma, secndoLutente) {
    if (haVinto(somma, secndoLutente)) {
        alert("hai vinto")
    }
    else {
        alert("hai perso")

    }
}

function haVinto(somma, secndoLutente) {
    return somma % 2 == 0 && secndoLutente == "pari" || somma % 2 == 1 && secndoLutente == "dispari";
}

