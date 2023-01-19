/* class Show {
    constructor(title, numberOfSeasons, episodesPerSeason) {
      this.title = title;
      this.numberOfSeasons = numberOfSeasons;
      this.episodesPerSeason = episodesPerSeason;
  }
}

const tau = new Show('The Story of Tau', 5, 12);
const meldrum = new Show('The Hero of Old Meldrum', 3, 6);
const clara = new Show('The Bugs of Isla Clara', 6, 15);

const shows = [tau, meldrum, clara];

// Modify the following code
// ====================== 

const buildComponent = (serie) => {
  const serieTitleText = serie.title;
  const serieSeasonsText = serie.numberOfSeasons + ' seasons';
  const serieEpisodesText = serie.episodesPerSeason + ' episodes per season';
  
  const serieComponent = {
    titleText: serieTitleText,
    seasonsText: serieSeasonsText,
    episodesText: serieEpisodesText
  }
  
  return serieComponent
}

const tauComponent = buildComponent(tau)
const meldrumComponent = buildComponent(meldrum)
const claraComponent = buildComponent(clara)

const showComponents = [tauComponent, meldrumComponent, claraComponent];

// ======================
// Modify the code above

const body = document.querySelector('body');

const updateShows = () => {
  for (let show of showComponents) {
    const showPane = document.createElement('div');
    showPane.classList.add('series-frame');
    const showHeading = document.createElement('h2');
    showHeading.innerText = show.titleText;
    const showDetails = document.createElement('p');
    const seasons = document.createElement('p');
    seasons.innerText = show.seasonsText;
    const episodes = document.createElement('p');
    episodes.innerText = show.episodesText;
    showDetails.append(seasons);
    showDetails.append(episodes);
    showPane.append(showHeading);
    showPane.append(showDetails);
    body.append(showPane);
  }
};

updateShows(); */
/* 


//-----CODE NON DRY------

//variable de différentes personnes
let personne1 = "Jean";
let personne2 = "Paul";
let person3 = "Marcel";

//On met la première lettre en majuscule, on salue la première personne et on donne le nombre de lettre dans son prénom
personne1 = personne1[0].toUpperCase() + personne1.substr(1);
const longueurPrenom1 = personne1.length;
console.log(`Bonjour ${personne1}, ton prénom contient ${longueurPrenom1} lettres`);

//On met la première lettre en majuscule, on salue la deuxième personne et on donne le nombre de lettre dans son prénom
personne2 = personne2[1].toUpperCase() + personne2.substr(1);
const longueurPrenom2 = personne2.length;
console.log(`Bonjour ${personne2}, ton prénom contient ${longueurPrenom2} lettres`);

//On met la première lettre en majuscule, on salue la troisième personne et on donne le nombre de lettre dans son prénom
personne3 = personne3[2].toUpperCase() + personne3.substr(1);
const longueurPrenom3 = personne3.length;
console.log(`Bonjour ${personne3}, ton prénom contient ${longueurPrenom3} lettres`);
 */

/* const numberOfLetters = (string) => {
    
    string = string[0].toUpperCase() + string.substr(1);
    const lengthOfstring = string.length;

    return `Bonjour ${string}, ton prénom contient ${lengthOfstring} lettres.`

}

console.log(numberOfLetters('Jean')) */

/* //tableau des ages des élèves dans la classe
const lrf = [14, 14, 15, 14, 16, 14, 14, 13];
// Nombre d'élèves
const kf = lrf.length;
// variable pour calculer la somme des ages
let mf = 0;
for(let df of lrf){
  mf += df;
}
//moyenne d'age dans la classe
const mld = mf / kf;
console.log('Il y a ' + kf + " élèves dans la classe et la moyenne d'age est " + mld);


//tableau des ages des élèves dans la classe
const ageOfStudents = [14, 14, 15, 14, 16, 14, 14, 13];
// Nombre d'élèves
const students = ageOfStudents.length;
// variable pour calculer la somme des ages
let sumOfAge= 0;
for(let age of ageOfStudents){
    sumOfAge += age;
}
//moyenne d'age dans la classe
const averageOfAge = sumOfAge / students;

console.log(`Il y a ${students} élèves dans la classe et la moyenne d'age est de ${averageOfAge} ans.`); */

const testSimpleWordCount = () => {
    const testString = 'I have four words!';
    if (getWordCount(testString) !== 4) {
        console.error('Simple getWordCount failed!');
    }
}

const testEdgeWordCount = () => {
    const testString = '             ';
    if (getWordCount(testString) !== 0) {
        console.error('Edge getWordCount failed!');
    }
}

const testSimpleLetterCount = () => {
   const testString = 'I have twenty one letters!';
    if (getLetterCount(testString) !== 21) {
        console.error('Simple getLetterCount failed!');
    }
}

const testEdgeLetterCount = () => {
    const testString = '")(&;//!!';
    if (getLetterCount(testString) !== 0) {
        console.error('Edge getLetterCount failed!');
    }
}

testSimpleWordCount('hello je suis une personne')