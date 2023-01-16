/* nombre a deviner : faire saisir par un des joueur
un nombre a deviner entre 0 et 100
l'autre joueur devra deviner le nombre en proposant un nombre 
et l'ordinateur dira si c'est plus ou moins 
il faut enregistrer le nombre de tentatives echouées le but est
d'avoir le moins de tentatives  */


/* console.log("a"*1)
console.log(typeof("a"*1)) */

let numberPlayer1 = prompt('Joueur 1 veuillez saisir un nombre compris entre 0 et 100') * 1;
/* console.log(numberPlayer1)

if(numberPlayer1 === NaN) {
    console.log('rentre lorsque numb1 === NaN')
}
if(!numberPlayer1) {
    console.log('rentre lorsque !numb1')
} */

while (numberPlayer1 < 0 || numberPlayer1 > 100 || !numberPlayer1){
    numberPlayer1 = prompt('Joueur 1 veuillez saisir un nombre compris entre 0 et 100') * 1
}

let numberPlayer2 = prompt('Joueur 2 votre mission est de deviner le nombre du joueur 1 ') * 1;
while (numberPlayer2 < 0 || numberPlayer2 > 100 || !numberPlayer2){
    numberPlayer2 = prompt('Joueur 2 veuillez saisir un nombre compris entre 0 et 100') * 1
}

let numberOfTry=0;

while (numberPlayer2 !== numberPlayer1) {
    numberOfTry++
    let result = '';
    if (numberPlayer2 > numberPlayer1){
        result = "c'est moins";
    }
    else if (numberPlayer2 < numberPlayer1){
        result = "c'est plus";
    }
    else{
        result = "espèce de con tape une un chiffre"
    }
    numberPlayer2 = prompt(result) * 1;
}

console.log(`Bravo! vous avez deviné en ${numberOfTry} tentatives`)








