/* const age = 18;
const pays = 'FR';
const peutConduireEnfrance = pays === 'FR' && age >= 18
const peutConduireUS = pays === 'US' && age >= 16


if(peutConduireEnfrance)
 {
    console.log('Vous avez le droit de conduire en France')
 }
else if (peutConduireUS){
    console.log("Vous avez le droit de conduire aux US")
 }
 else {
    console.log("Vous n'avez pas le droit de conduire")
 } */


//const phrase = "Bonjour"


/*

SI age > 17 ET pays === "FR"
    ALORS ....

si (    ( age >= 18 ET pays === "FR" )  ||  ( age >= 16 ET pays === "US" )                                         )



if ( (prenom === "Ornella") && (pays === "FR") && (ville === "Lille") && (age === 31) )


if ( (prenom === "Ornella") || (pays === "FR") || (ville === "Lille") || (age === 31) )



SI age > 17 OU pays === "DE"
    ALORS ...

si ( (age > 17) OU (pays === "DE") )

if ( (age > 17) || (pays === "DE") )

*/



/*const peutConduire = (age >= 18) && (pays === "FR");

if (peutConduire) {
    console.log("ok tu peux conduire")
}
else {
    console.log("désolé pas possible")
}
 */

/* if (prenom === "Ornella" && ville === "Lille" && age === 31) {
    console.log('ok jai bien toutes les Ornella de Lille')
} */



/* if (prenom === "Ornella") {

    if (ville === "Lille") {

        console.log("OK tu es bien ornella et tu habites à Lille");

        //console.log(naissance)

        if (age === 31) {

            console.log("ok ornella tu as 31 ans et tu habites à Lille")

        }

    }

    console.log("OK tu es bien ornella")

} */



/* const a = prompt("Rentrez le nombre a");
const b = prompt("Rentre le chiffre b")
const c = a * b
let signe = "positif";
// PAR DEFAUT, meme si on a pas comparé je mets signe à positif

if ( c < 0 ) {
  signe = "negatif";
}

console.log (`${a} * ${b} = ${c} est ${signe}`); */

/* document.addEventListener("DOMContentLoaded", function() {
  function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'Vous avez cliqué sur le bouton!';
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }
}); */

/* const l = 23;
const L = 43;
const h = 20;
const v = 15;

const l = 23, L = 43, h = 20, v = 15; */

//const concat = 
//const concat = `Voici les joueurs : ${joueur1}, ${joueur2}, ${joueur3}`
//console.log(concat)

/* const joueur1 = "ornella";
const joueur2 = "mika";
const joueur3 = "papa";

console.log( `Voici la liste des joueurs : ${joueur1}, ${joueur2}, ${joueur3}`)

console.log( "Voici la liste des joueurs : " + joueur1 + ", " + joueur2 + ", " + joueur3 ) */





/* ==================================================== */
/* Différence sauts de ligne avec et sans les backticks */
/* ==================================================== */




//console.log(d)

// Exmeple 1 :
/* console.log("Coucou");
console.log("Coucou");
console.log("Coucou");
console.log("Coucou");
console.log("Coucou");
console.log("Coucou");
console.log("Coucou");
console.log("Coucou");
console.log("Coucou");
console.log("Coucou");
console.log("Coucou");
console.log("Coucou");
console.log("Coucou");
console.log("Coucou");
console.log("Coucou"); */



// Exemple 2 :
// FAIRE 3 fois un console.log de Coucou
// POUR c=0 jusqua c<3 et a chaque coup INCREMENTER c + 1
//const notes = [11, 10, 18, 15, 17, 19, 7, 3, 12]

/* for (let i = 2; i < notes.length; i = i + 2) {
    console.log(notes[i])
} */

/* for (let i in notes) {
    console.log(notes[i]) >>> contenu 11
}

for (let i of notes) {
    console.log(i) >>> contenu 11
} */



// Exemple boucle while :
/* let c = 0;

while(c < 10) {
  console.log("Coucou");
  c = c + 1;
} */

/* const chiffreSaisi = prompt('Entrez un chriffre compris entre 0 et 10')
 */
/*
SI le chiffreSaisi est supérieur à 0 ET le chiffreSaisi est inférieur à 10
    ALORS afficher dans la console tous les chiffres qui sont inférieurs au chiffreSaisi
SINON
    afficher un message d'erreur dans la console
*/

/* if (chiffreSaisi > 0 && chiffreSaisi < 10) {
    for(i = 0; i < chiffreSaisi; i++) {
        console.log(i)
    }
}
else {
    console.log("votre chiffre n'est pas compris entre 0 et 10")
} */

/*const guess = 8;
let chiffreSaisi = prompt("entrez un chriffre") * 1

while(chiffreSaisi !== guess){
    chiffreSaisi = prompt("tapez un nouveau chriffre") * 1
}
console.log("bravo")*/

//BOUCLE FOR / FOR OF / FOR IN 

/* let numberOfPassengers = 10

for(let i = 0; i < numberOfPassengers; i++){
    console.log("Passengers embarqués")
} */


//const passengers = ['Max', 'Mika', 'Ornella', 'Valentin', 'Marie']

/* const passengers = [
    { name:'Max', 
      ticketNumber: "0001"
    },

    { name:'Toto', 
      ticketNumber: "0002"
    },

    { name:'Bill', 
      ticketNumber: "0003"
    }, 

    { name:'Julie', 
      ticketNumber: "0004"
    }
]


for (let passenger of passengers){
    console.log(passenger.name + " " + passenger.ticketNumber);
} */

/* ================= */
/* ================= */
/* ================= */

/* const numerosLoto = [15, 14, 11, 79, 19]; */

/* for (let numero of numerosLoto) {
    console.log("numero à l'aide d'un for of", numero);
} */



/* let i = 0;

while (i < numerosLoto.length) {
    console.log ("à l'aide d'un while :", numerosLoto[i]);
    i = i + 1;

    // = > affectation, assignation, enregistrement
    // == > comparaison (faible)
    // === > comparaison forte (secure)
}

console.log(i); */

/* for (let indexDesNums in numerosLoto) {
    console.log('index des numeros', indexDesNums);
} */


/* let episodes = [
    {
        title: 'Episode 1',
        duration: 45,
        hasBeenWatched: true
    },
    {
        title: 'Episode 2',
        duration: 45,
        hasBeenWatched: false
    },
    {
        title: 'Episode 3',
        duration: 45,
        hasBeenWatched: false
    },
    {
        title: 'Episode 4',
        duration: 45,
        hasBeenWatched: false
    }
]

for (let i in episodes){
    episodes[i].hasBeenWatched= false
    //console.log(episodes[i].hasBeenWatched)
}
 */

/* for (let i = 0; i < episodes.length; i++){
    episodes[i].hasBeenWatched = false
    console.log("coucou") */


/*     if (episodes[i].hasBeenWatched === true){
        episodes[i].hasBeenWatched = false;
        console.log("coucou")
    } */


//console.log('episodes', episodes)


/* for (let j = 0; j < numerosLoto.length ; j++) {
    console.log ("à l'aide d'un for :", numerosLoto[j]);
} */

/* function maFonction(param1, param2) {
    // je fais des choses dans ma fonction...
    let result = param1 + param2
    return result
  }

console.log (maFonction(3, 2)); */


/* let attaquants = ["mbapé", "giroud", "griezman"]

for (let i = 0; i < attaquants.length; i = i + 1) {
    console.log(attaquants[i])
}

for (let attaquant of attaquants){
    console.log(attaquant)
}
 */

/* ========================= */

/* const calculMoyenne = numbers => {

    if (numbers.length === 0){
        return "pas encore de notes"
    }
    else {
        let memo = 0
        for (let number of numbers) {
            memo += number
        }
        return memo / numbers.length
    }
}

const darkRatings = [],
casaDePapelRatings = [1, 2, 3],
breakingBadRatings = [1, 2, 3],
lupinRatings = [1, 2, 3],
theCrownRatings = [1, 2, 3]

const darkAverage = calculMoyenne(darkRatings)
console.log (darkAverage)

/* ========================= */
// INVERSER UNE CHAINE DE CARACTERE AVEC UNE FONCTION
// METHOD .split // METHOD .reverse // METHOD .join
/* 
const word = 'hello les gens'

console.log(word.split(" "))
console.log(word.reverse())
console.log(word.join())
 */



// TERNAIRE >>> raccourcis du if else mais que avec des bouléens 
let connected = true;
let subscribed = true;

//let fraisDeLivraison; 


/* if (isMember) {
    //console.log('vous etes membre donc frais réduits');
    fraisDeLivraison = 2;
}
else{
    //console.log("vous n'etes pas membre donc frais standard");
    fraisDeLivraison = 8;
}
 */

/* const etatDeConnexion = connected ? 'vous etes connecté' : "vous n'etes pas connecté"
console.log(etatDeConnexion)
 */


//console.log(fraisDeLivraison)


/* const a = 1,
b = 2,
c = 3 */

/* const a = 1, b = 2, c = 3 */

/* const membreDeFamille1 = 'Ornella',
membreDeFamille2 = 'Mikael',
membreDeFamille3 = 'Marie',
membreDeFamille4 = 'Antonio',
membreDeFamille5 = 'Evy',
membreDeFamille6 = 'Dark',
membreDeFamille7 = 'Otis'

// Sans backtics
console.log('Tous les membres de la famille sont : ' + membreDeFamille1 + ', ' + membreDeFamille2 + ', ' + membreDeFamille3 + ', ' + membreDeFamille4)

// Avec backtics
console.log(`Tous les membres de la famille sont : ${membreDeFamille1}, ${membreDeFamille2}, ${membreDeFamille3}, ${membreDeFamille4}`)
 */