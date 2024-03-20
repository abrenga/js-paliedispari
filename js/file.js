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
    let numeroRandom = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return numeroRandom;
}


function verificaCondizione(somma, secondoLutente) {
    if (haVinto(somma, secondoLutente)) {
        alert("hai vinto")
    }
    else {
        alert("hai perso")

    }
}

function haVinto(somma, secondoLutente) {
    return somma % 2 == 0 && secondoLutente == "pari" || somma % 2 == 1 && secondoLutente == "dispari";
}




/*creato la funzione che si occupa di caricare i documenti nel HTML */
function creaHTMLOption() {
    let id = document.getElementById("inputGroupSelect01");
    for (let i = 0; i <= giochi.length; i++) {
        let option = document.createElement("option");
        id.appendChild(option);
        option.innerHTML = giochi[i].nome;  
        seleziona(id);

    }

}


function seleziona(id) {
 let select = id.selectedIndex;
   let  selezionato = id.options[select];
   
}




