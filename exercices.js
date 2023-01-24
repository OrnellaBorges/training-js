/* const nbrUser= prompt('Entrez un chiffre entre 0 et 100') * 1
console.log(nbrUser)
const nbrPas = prompt('Entrez un pas') * 1

for(let i = nbrUser; i > 0; i = i - nbrPas){
    console.log(i)
} */

// demander de saisir 2 nbr par l'utilisateur 
// si ils sont identique afficher dans la console 'les nbr sont egaux'
// si il ne sont pas identique afficher lequel est le plus grand et lequel est le plus petit

/* const nbrA = prompt('Entrez un nombre') * 1

const nbrB = prompt('Entrez un nombre') * 1

if(nbrA === nbrB){
    console.log(`les nombres ${nbrA} et ${nbrB} sont egaux`)
}

else{
    if(nbrA > nbrB){
        console.log(`Le nombre ${nbrA} est plus grand que ${nbrB}`)
    }
    else{
        console.log(`Le nombre ${nbrB} est plus grand que ${nbrA}`)
    }
} */
 

// faire le même exercice mais avec trois nombres 
// demander de saisir 3 nbr par l'utilisateur 
// si ils sont identique afficher dans la console 'les nbr sont egaux'

/* const a = 2;
const b = 2; 
const c = 2;
const tab = [7, 10, 1]

if(a === b && b === c && c === a){
    console.log('les trois variables sont identiques')
}
else if(a !== b && b !== c && c !== a){
    console.log('les trois variables sont différentes')
}
else{
    console.log('Deux des trois variables sont identiques')
}
tab.sort(function(a, b){
    return b - a // ordre decroissant
})

tab.sort(function(a, b){// fonction anonyme
    return a - b // ordre croissant
})

console.log(tab)

// on peut aussi ecrire de la manière suivante : 
function trierOrdreCroissant(a, b){
    return a - b 
}

function trierOrdreDecroissant(a, b){
    return b - a 
}

tab.sort(trierOrdreCroissant)
console.log(tab) */
// classer les nombres dans l'ordre croissant et dans l'ordre décroissant. ()

/* const tab = [7, 10, 1, 15, 7, 72, 500, 98, 105]
function trierOrdreCroissant(a, b){
    return a - b 
}
tab.sort(trierOrdreCroissant)
console.log(tab) */


/* //const months = ['Feb', 'Jan', 'Apr', 'Dec', 'Oct']
const months = ['Jan', 'Feb', 'Apr', 'Dec', 'Oct']
                                       a      b

const months = ['Jan', 'Feb', 'Apr', 'Oct', 'Dec']
console.log(months)

function sortMonths(a, b){
    const correctMonthsOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return correctMonthsOrder.indexOf(a) - correctMonthsOrder.indexOf(b);
}                       11                            9

months.sort(sortMonths)
console.log(months) */



/* const randomColors = ['Vert', 'Jaune', 'Noir', 'Blanc', 'Marine']

const randomColorsCopy = [...randomColors] // faire une copie parfaite de la constante

const randomColorsCopy2 = randomColors; 
function sortColors(a, b){
    const correctOrderColors = ['Blanc', 'Jaune', 'Vert', 'Marine', 'Noir']
    return correctOrderColors.indexOf(a) - correctOrderColors.indexOf(b)
}

console.log('origin avant le sort: ', randomColors)
randomColorsCopy2.sort(sortColors)
console.log('copy2: ', randomColorsCopy2)
console.log('original: ', randomColors)
 */


// EXERCICE DU TRIANGLE GENERE PAR UTILISATEUR



// Mes constantes 
const input = document.querySelector("input")
const figure = document.querySelector("figure")
let numberInput


/* for(let i = 0; i < 10; i++){
    let cumul = ''
    for(let j = 0; j < i+1; j++){
        cumul = cumul + 'X'
    }
    document.write(`<p>${cumul}</p>`)
} */


// Mes fonctions
const maFigure = (maxLine) => {
    let letter = ''
    for(let i = 0; i < maxLine; i++){
        letter = letter + 'X'
        const paragraphe = document.createElement("p")
        paragraphe.innerText = letter
        figure.appendChild(paragraphe)
    }
}

// Start script
input.addEventListener("input",function(){
    figure.innerHTML = ''
    numberInput = +input.value * 1
    maFigure(numberInput)
})
