class Show {
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

updateShows();