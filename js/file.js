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
        creaHTMLEsercise( "è palindromo")
    } else {
        creaHTMLEsercise("non è palindromo")
    }

}


function pariODispari(numeroInserito, pariDisapriStr) {
    let randomNum = estrapolaNumRandom();
    let somma = numeroInserito + randomNum;
    verificaCondizione(somma, pariDisapriStr);

}
function estrapolaNumRandom() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(5);
    let numeroRandom = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return 2;
    return numeroRandom;
}


function verificaCondizione(somma, secondoLutente) {
    if (haVinto(somma, secondoLutente)) {
        creaHTMLEserciseresult("Hai Vinto");
    }
    else {
        creaHTMLEserciseresult("Non hai Vinto");

    }
}

function haVinto(somma, secondoLutente) {
    return somma % 2 == 0 && secondoLutente == "pari" || somma % 2 == 1 && secondoLutente == "dispari";
}



let id = document.getElementById("inputGroupSelect01");


/*Crea l'HTML */
function creaHTMLOption(nome) {
    let option = document.createElement("option");
    id.appendChild(option);
    option.innerHTML = nome;
}



/*creato la funzione che si occupa di caricare i documenti nel HTML */
function estrapolaDati() {
    for (let i = 0; i <= giochi.length; i++) {
        let indice = giochi[i];
        creaHTMLOption(indice.nome);
        giochi[i].esercizio 

    }
}

/*Selezioniamo il select */

function seleziona() {
    let select = id.selectedIndex;
    let selezionato = id.options[select];
    let testoDentroOption = selezionato.text;
    return testoDentroOption;
}


id.addEventListener("change", (e) => {
    const inputUno = "cardEsercizioUno";
    const inputDue = "cardEsercizioDue";
    remove(inputUno);
    remove(inputDue);
    if (e.target.value == "palindromo") {
        show(e.target.value, inputUno);
    } else {
        show(e.target.value, inputDue);

    }

})


function show(nome, classE) {
    let row = document.getElementById(classE)
    let nomeSelezionato = seleziona();
    if (nome == nomeSelezionato) {
        row.classList.remove("d-none");
    } else {
        row.classList.add("d-none");
    }
}


function remove(classE) {
    let row = document.getElementById(classE)
    row.classList.add("d-none");

}


let btnPalindromo = document.getElementById("btnPalindromo");

btnPalindromo.addEventListener("click", (e) => {
    let inputNome = document.getElementById("inputNome").value;
    palindromo(inputNome)
    ;

})

function creaHTMLEsercise(result) {
    const paragrafo = document.getElementById("paragrafo");
    paragrafo.innerHTML = result;
}


function creaHTMLEserciseresult(result) {
    const paragrafo = document.getElementById("paragrafod");
    paragrafo.innerHTML = result;
}



let btnseHaiVinto= document.getElementById("btnSeHaiVinto");

btnseHaiVinto.addEventListener("click", (e) => {
    let numeroInserito = document.getElementById("num").value;
    let pariDisapriStr = document.getElementById("result").value;
    pariODispari(numeroInserito, pariDisapriStr)
    
})



estrapolaDati()














