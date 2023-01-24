//exercice 1 serie-01 : creer un formulaire html
// Doit contenir 4 champs  de texte et un bouton submit
// saisir 3 notes puis faire le calcul de la moyenne


//FUNCTION CALCULER UNE MOYENNE 

const calculeMoyenne = (array) => {
    let sum = 0;
    for(let n of array){
        //console.log(note)
        sum = n+ sum
    }
    return sum / array.length
}
const notes = [12, 17, 5]

// appel de ma fonction calculeMoyenne 
const moyenne = calculeMoyenne(notes)
console.log(moyenne)

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


