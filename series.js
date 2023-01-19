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

/* const ratingsOfDarkSerie = [1, 2, 3]
const ratingsOfTheWitcherSerie = [2, 3, 4] */

/* console.log(ratingsOfDarkSerie) */

const darkSerie = {
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
    ratings: [3, 4, 5],
    view: 90,
    title: 'Ghost'
}

const series = [darkSerie, theWitcherSerie, ghost]

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

/* const averageRatingsOfDarkSerie = calculateAverage(darkSerie.statistics.ratings)
console.log(averageRatingsOfDarkSerie)

const averageRatingsOfTheWitcherSerie = calculateAverage(theWitcherSerie.statistics.ratings)
console.log(averageRatingsOfTheWitcherSerie)

const averageRatingsOfDarkSerie = calculateAverage(darkSerie.statistics.ratings)
console.log(averageRatingsOfDarkSerie)

const averageRatingsOfTheWitcherSerie = calculateAverage(theWitcherSerie.statistics.ratings)
console.log(averageRatingsOfTheWitcherSerie)

const averageRatingsOfDarkSerie = calculateAverage(darkSerie.statistics.ratings)
console.log(averageRatingsOfDarkSerie)

const averageRatingsOfTheWitcherSerie = calculateAverage(theWitcherSerie.statistics.ratings)
console.log(averageRatingsOfTheWitcherSerie)

const averageRatingsOfDarkSerie = calculateAverage(darkSerie.statistics.ratings)
console.log(averageRatingsOfDarkSerie)

const averageRatingsOfTheWitcherSerie = calculateAverage(theWitcherSerie.statistics.ratings)
console.log(averageRatingsOfTheWitcherSerie)
 */

for (let serie of series) {
    const result = calculateAverage(serie.ratings)
    console.log(result)
}

//console.log('test', '0345' / 3)