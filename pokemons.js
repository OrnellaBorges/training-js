//POKEMON EXERCICES : AFFICHER LES POKEMONS 


// EXO 1 : afficher le ou les pokemons que l'on peut controler avec le badg selectionné


/* for (let i = 0; i <= pokemons.length; i++){

    if ( pokemons[i].level <= maxLevelOfBadgeSelected) {
        console.log(pokemons[i].name)
    }
} */

/* const maFonction = (pokemonsOfDresseur, maxLevelBadgeSelectedOfDresseur) => {
    let sauvegardeDuNom = '';
    for (let pokemon of pokemonsOfDresseur){
        if (pokemon.level <= maxLevelBadgeSelectedOfDresseur){
            sauvegardeDuNom = `${pokemon.name} ${sauvegardeDuNom}`
        }
    }
    return sauvegardeDuNom
} */


//maFonction(pokemonsOfSacha, maxLevelBadgeSelectedOfSacha)
/* const result = maFonction(dresseur.pokemons, dresseur.niveauDuDernierBadgeObtenu)
console.log(result) */


/* 
for (let pokemon of pokemonsOfSacha){
    if (pokemon.level <= maxLevelBadgeSelectedOfSacha)
    console.log(pokemon.name)
}

for (let pokemon of pokemonsOfPierre){
    if (pokemon.level <= maxLevelBadgeSelectedOfPierre)
    console.log(pokemon.name)
} */

// EXO 2 : afficher le ou les pokemons que l'on peut controler avec le badg selectionné












let maxLevelBadgeSelectedOfSacha = 23;
let maxLevelBadgeSelectedOfPierre = 67;

const pokemonsOfSacha = [
    {
        name : 'Salameche', 
        genre : 'male',
        level : 7,
        type : 'feu',
        shiny : false,
        do : 'Sacha' 
    },
    {
        name : 'Pikachu', 
        genre : 'Female',
        level : 14,
        type : 'electrique',
        shiny : false,
        do : 'Sacha' 
    },
    {
        name : 'Bulbizarre', 
        genre : 'male',
        level : 24,
        type : 'plante',
        shiny : false,
        do : 'Sacha' 
    },
    {
        name : 'Carapuce', 
        genre : 'male',
        level : 31,
        type : 'eau',
        shiny : true ,
        do : 'Sacha'
    },
    {
        name : 'Racaillou', 
        genre : 'male',
        level : 42,
        type : 'pierre',
        shiny : false,
        do : 'Sacha' 
    }
]

const dresseur = {
    prenom: 'Pierre',
    niveauDuDernierBadgeObtenu: 30,
    pokemons: [
        {
            name : 'Ponita', 
            genre : 'male',
            level : 9,
            type : 'feu',
            shiny : false,
            do : 'Pierre' 
        },
        {
            name : 'Rondoudou', 
            genre : 'Female',
            level : 12,
            type : 'psy',
            shiny : false,
            do : 'Pierre' 
        },
        {
            name : 'Velipierre', 
            genre : 'male',
            level : 27,
            type : 'plante',
            shiny : false,
            do : 'Pierre' 
        },
        {
            name : 'Psychokwak', 
            genre : 'male',
            level : 31,
            type : 'eau',
            shiny : true ,
            do : 'Pierre'
        },
        {
            name : 'Magmar', 
            genre : 'male',
            level : 42,
            type : 'feu',
            shiny : false,
            do : 'Pierre' 
        }
    ]
}

// afficher tous les noms des pokemons en une ligne 


/* console.log(dresseur.pokemons[0].name)
console.log(dresseur.pokemons[1].name)
console.log(dresseur.pokemons[2].name)
console.log(dresseur.pokemons[3].name)
console.log(dresseur.pokemons[4].name) */

/* for (let i = 0; i < dresseur.pokemons.length; i++) {
    console.log(dresseur.pokemons[i].name)
} */



/* for (let pokemon of dresseur.pokemons) {

    if (pokemon.level < niveauDuDernierBadgeObtenu) {
        console.log(pokemon.name)
    }
    else{
        console.log('vos pokémons sont forts')
    }
} */
