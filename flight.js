const flight = {
    date: "12 janvier 2022",
    heureDepart: '10h',
    heureDarrivee: '12h',
    numeroDuVol: 'AF3255',
    modeleDeLavion: 'Airbus A380',
    compagnie: 'Air France',
    equipage: {
        pilotes: [
            { 
            nom: "Dupont",
            prénom: "John"
            },
            {
            nom: "Dupuy",
            prénom: "Jane"
            }
        ],
        steewart: [
            {
                nom: "Martin",
                prénom: "Lucas"
            }
        ],
        hotesses: [
            {
                nom: "Lane",
                prénom: "Lois"
            },
            {
                nom: "Ketier",
                prénom: "Sandrine"
            }
        ]
    },
    listeDesPassagers : [
        {
            nom: 'Borges',
            prenom: 'Mika',
            age: 23,
            numeroDuPasseport: 'jck6458ldl'
        },
        {
            nom: 'Borges',
            prenom: 'Ornella',
            age: 67,
            numeroDuPasseport: 'jc7689idoz'
        },
        {
            nom: 'Moro',
            prenom: 'Marie',
            age: 23,
            numeroDuPasseport: '5665jhFGHY'
        }
    ]
}

// Afficher la liste des passagers :


//console.log(values)
//console.log(vol.listeDesPassagers)

//const flightTableau = Object.values(flight)
//console.log(flightTableau)

console.log(flight.listeDesPassagers)
let save =''
for (let passager of flight.listeDesPassagers) {
    //console.log(`${passager.nom} ${passager.prenom}`)
      save = `${save} ${passager.nom}`
}
console.log(save)
