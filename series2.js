/* /* const calculMoyenne = numbers => {

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

/* const ratingsOfDarkSerie = [1, 2, 3]
const ratingsOfTheWitcherSerie = [2, 3, 4] */

/* console.log(ratingsOfDarkSerie) */
/* onst darkSerie = {
    ratings: [1, 2, 3],
    view: 168,
    title: 'Dark'
}

const theWitcherSerie = {
    ratings: [2, 3, 4],
    view: 68,
    title: 'The Witcher'
}
const ghost = {
    ratings: [2, 9, 4],
    view: 90,
    title: 'Ghost'
}

const series = []

const calculateAverage = (tableau) => {
    if (tableau.length) {
        let sum = 0
        for (let element of tableau) {
            sum += element
        }
        return sum / tableau.length
    }
    else {
        return `il n'y a pas encore de notes car tableau.length vaut ${tableau.length}`
    }
}


for (let serie of series) {
    const result = calculateAverage(serie.ratings)
    console.log(result)
} */


const calculateAverageRating = (array) => {

//const array = [4, 10, 10];

let sumOfNotes = 0;

for (let element of array){
    //console.log(element)

    sumOfNotes = element + sumOfNotes;
    //console.log(sumOfNotes)
}
    return sumOfNotes / array.length
}

//console.log('moyenne =', moyenne)

const darkSerie = [8, 9, 10]

const moyenneOfSerie = calculateAverageRating(darkSerie)

console.log(moyenneOfSerie)

