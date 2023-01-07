class Show {
    constructor(title, numberOfSeasons, episodesPerSeason) {
        this.title = title;
        this.numberOfSeasons = numberOfSeasons;
        this.episodesPerSeason = episodesPerSeason;
    }
} 

/* const _tau = {
    title: 'The Story of Tau',
    numberOfSeasons: 5,
    episodesPerSeason : 12
} */

const tau = new Show('The Story of Tau', 5, 12);
const meldrum = new Show('The Hero of Old Meldrum', 3, 6);
const clara = new Show('The Bugs of Isla Clara', 6, 15);
const a = new Show('The Story of Tau', 5, 12);
const b = new Show('The Hero of Old Meldrum', 3, 6);
const c = new Show('The Bugs of Isla Clara', 6, 15);
const d = new Show('The Story of Tau', 5, 12);
const e = new Show('The Hero of Old Meldrum', 3, 6);
const f = new Show('The Bugs of Isla Clara', 6, 15);
//const shows = [tau, meldrum, clara, a, b, c, d, e, f];
const shows = [tau, meldrum, clara];

// Modify the following code
// ======================

const showComponentBuilder = (show) => {
    const titleText = show.title;
    const seasonsText = show.numberOfSeasons + ' seasons';
    const episodesText = show.episodesPerSeason + 'episodes per season';
    return {
        titleText,
        seasonsText,
        episodesText
    }
}

const tauComponent = showComponentBuilder(tau)
const meldrumComponent = showComponentBuilder(meldrum)
const claraComponent = showComponentBuilder(clara)

const showComponents = [tauComponent, meldrumComponent, claraComponent];

/* for(let i = 0; i < shows.length; i++) {
    showComponents.push( showComponentBuilder(shows[i]) )
} */

/* for(let i = 0; i < shows.length; i++) {
    showComponents[i] = showComponentBuilder(shows[i])
}

for(let i = 0; i < shows.length; i++) {
    showComponents.push( showComponentBuilder(shows[i]))
}

for (let show of shows){
    showComponents.push(showComponentBuilder(show))
} */



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

updateShows();