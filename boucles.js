/* const listeCourses = ['fromage', 'jockey', 'croquette']
const listeCourses2 = ['fromage', 'jockey', 'croquette'] */

/* for(let i = 0; i < listeCourses.length; i++){
    console.log(listeCourses[i])
} */

// BOUCLE FOR OF 

/* for(let element of listeCourses){
    console.log(element)
} */

// METHODE FOR EACH ES5
/* listeCourses.forEach(function(element, index) {
    console.log(element)
});

// METHODE FOR EACH ES6
listeCourses.forEach((element, index) => {
    console.log(element)
})
console.log(listeCourses) */

/* const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split()
    console.log('wordArray', wordArray)
    return wordArray.length;
}

console.log ('nombres de mots :', getWordCount('Bonjour je vais bien') ) */

// METHODE MAP ES5 
/* 
const result = listeCourses2.map(function(element){
    console.log("coucou")
    return element + "z"
})
console.log(listeCourses2)
console.log(result) */



// METHODE MAP ES6 monoligne = sans {} sans return / multiligne = avec {} et un return

/* const result = listeCourses2.map((element, index) => {
    console.log('coucou')
    return element + 's'
})
console.log(listeCourses2)
console.log(result) */

/* const nouveauTableau = listeCourses
listeCourses[0] = 'coca'
console.log(nouveauTableau) */

/* const nouveauTableau = [...listeCourses, 'pain']
console.log(nouveauTableau) */


// CONVERTIR DES MINUTES EN SECONDE ET EN FAIRE UNE FONCTION

const arrayOfDays = [1, 0.5, 2, 4, 3]

const convertDaysValue = (days) => {
    const hours = days * 24
    const minutes = hours * 60
    const seconds = minutes * 60
    const result = `${days} days = ${hours} hours. ${days} days = ${minutes} min. ${days} days = ${seconds} seconds.`
    return result
}
const convertDaysArray = (daysArray) => {
    for(let days of daysArray){
        const result = convertDaysValue(days)
        console.log(result)
    }
}

convertDaysArray(arrayOfDays)
convertDaysArray([2, 7, 9])
