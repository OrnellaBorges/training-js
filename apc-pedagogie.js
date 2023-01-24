//exercice 1 serie-01 : creer un formulaire html
// Doit contenir 4 champs  de texte et un bouton submit
// saisir 3 notes puis faire le calcul de la moyenne


//FONCTION CALCULER UNE MOYENNE 

const calculeMoyenne = (array) => {
    //console.log(element.value)
    let sum = 0;
    for(let element of array){
        const cleanValue = +element.value
        sum = cleanValue + sum
    }
    return sum / array.length
}

// METHODE QUI RECUP LES ELEMENTS DONT L'ATRRIBUT NAME VAUT NOTE DANS LA BALISE. PUIS IL MET CES ELEMTS DANS UN TAB.
const inputValues = document.getElementsByName('note')

//il y a un s a getElementsByName donc le resultat stocker dans la var sera un tableau

// FONCTION QUI EXECUTE LE CALCULE LORS DU CLICK SUR SUBMIT. 
const buttonSubmit = document.querySelector(".btn-submit")
buttonSubmit.addEventListener("click", function(e) {
    e.preventDefault()//permet stopper comportement par defaut d'un boutton submit qui recharge la page

    //recup les valeurs à l'interieur des inputs
    //console.log(inputValues[0].value)//recup valeur de l'elemt index 0
    // faire une boucle pour acceder a tous les elements du tab 
    //for(let element of inputValue)

    const result = calculeMoyenne(inputValues)
    console.log(result)

})


/* const notes = [12, 17, 5] */

// appel de ma fonction calculeMoyenne 
/* const moyenne = calculeMoyenne(notes)
console.log(moyenne)
 */

//console.log(notes)

//Boucle for of calcule de la moyenne 

/* let sumOfNote = 0;

for(let note of notes){
    //console.log(note)
    sumOfNote = note + sumOfNote
    moyenneOfNote = sumOfNote / notes.length
} */

/* console.log('sumOfNote', sumOfNote)
console.log('moyenneOfNote', moyenneOfNote) */

// SAVE VALUES FROM INPUT TO ARRAY
