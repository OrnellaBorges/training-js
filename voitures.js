// SOLUTION :

/* let totalPrixOptions = 0
let totalNameOptions = ''

for (let garage of garages) {
    for (let voiture of garage) {
       for (let option of voiture.options) {
            totalPrixOptions = option.prix + totalPrixOptions
            totalNameOptions = `${totalNameOptions} ${option.name}`
       }
    }
}

console.log(totalPrixOptions)
console.log(totalNameOptions) */










// SOLUTION AVEC DES TABLEAUX/OBJETS SI NECESSAIRE :
/* 
for (let garage of garagesTableau) {
    for (let voiture of garage.voituresDuGarage) {
        for(let option of voiture.options) {
            console.log(option.prix)
        }
    }
}
 */

// avoir le prix total de toutes les options 
// avoir le nom de toutes les options 

// for (let element of tableau) >>> attention l'élement peut etre n'importe quoi!

// for (let i = 0; i < tableau.length; i++)

const garagesTableau = [
    {  
        nameOfGarage: 'garage Moulins',
        addressOfGarage: '1 rue du jardin des Plantes, 59000 Lille',
        voituresDuGarage : [
            {
                modele: 'astra',
                carburant: 'essence',
                portes: '3',
                marque: 'opel',
                options: [
                    {
                        name: 'toit ouvrant',
                        prix: 550,
                        couleur: ''
                    },
                    {
                        name: 'sieges baquets',
                        prix: 700,
                        couleur: 'noir alcantara'
                    }
                ]
            },
            {
                modele: 'megane',
                carburant: 'essence',
                portes: '3',
                marque: 'renault',
                options: [
                    {
                        name: 'aileron electrique',
                        prix: 500,
                        couleur: ''
                    }
                ]
            },
            {
                modele: '500',
                carburant: 'essence',
                portes: '3',
                marque: 'fiat',
                options: [
                    {
                        name: 'retroviseurs dégivrants',
                        prix: 350,
                        couleur: 'rouge'
                    }
                ]
            }
        ],

    },
    {
        nameOfGarage: 'garage TOTO',
        addressOfGarage: '1 rue du jardin des Plantes, 59000 Lille',
        voituresDuGarage: [
            {
                modele: 'sandero',
                carburant: 'essence',
                portes: '3',
                marque: 'dacia',
                options: [
                    {
                        name: 'clim',
                        prix: 200,
                        couleur: ''
                    }
                ]
            },
            {
                modele: 'megane',
                carburant: 'essence',
                portes: '3',
                marque: 'renault',
                options: [
                    {
                        name: 'radar',
                        prix: 300,
                        couleur: ''
                    }
                ]
            },
            {
                modele: 'clio',
                carburant: 'essence',
                portes: '3',
                marque: 'peugeot',
                options: [
                    {
                        name: 'bluetooth',
                        prix: 100,
                        couleur: ''
                    }
                ]
            }
        ]
    }
]



let prixTotalDesOptions = 0
let listeTotaleDesOptions = ''

// AVEC UNE BOUCKE FOR OF 

for (let garage of garagesTableau) {
    for (let voiture of garage.voituresDuGarage) {
        for (let option of voiture.options) {
            prixTotalDesOptions = option.prix + prixTotalDesOptions
            if (listeTotaleDesOptions === '') // on peut aussi ecrire if (!listeTotaleDesOptions) 
            {
                listeTotaleDesOptions = option.name
            }
            else {
                listeTotaleDesOptions = `${listeTotaleDesOptions}, ${option.name}`
            }
        }
    }
}

/* for (let i in garagesTableau) {
    for (let j in garagesTableau[i].voituresDuGarage) {
        for (let k in garagesTableau[i].voituresDuGarage[j].options) {
            prixTotalDesOptions = garagesTableau[i].voituresDuGarage[j].options[k].prix + prixTotalDesOptions
            if (i === '0' && j === '0' && k === '0') { // on peut aussi ecrire if (!listeTotaleDesOptions) 
                listeTotaleDesOptions = garagesTableau[i].voituresDuGarage[j].options[k].name
            }
            else {
                listeTotaleDesOptions = `${listeTotaleDesOptions}, ${garagesTableau[i].voituresDuGarage[j].options[k].name}`
            }
        }
    }
} */

/* for (let i = 0; i < garagesTableau.length; i++) {
    for (let j = 0; j < garagesTableau[i].voituresDuGarage.length; j++) {
        for (let k = 0; k < garagesTableau[i].voituresDuGarage[j].options.length; k++) {
            prixTotalDesOptions = garagesTableau[i].voituresDuGarage[j].options[k].prix + prixTotalDesOptions
            if (listeTotaleDesOptions === '') { // on peut aussi ecrire if (!listeTotaleDesOptions)
                listeTotaleDesOptions = garagesTableau[i].voituresDuGarage[j].options[k].name
            }
            else {
                listeTotaleDesOptions = `${listeTotaleDesOptions}, ${garagesTableau[i].voituresDuGarage[j].options[k].name}`
            }
        }
    }
} */

console.log(prixTotalDesOptions)
console.log(listeTotaleDesOptions)

// SOLUTION QU'AVEC DES OBJETS :

/* const garagesObject = {
    garage1: {
        voiture1: {
            modele: 'astra',
            carburant: 'essence',
            portes: '3',
            marque: 'opel',
            options: {
                option1: {
                    name: 'toit ouvrant',
                    prix: 500,
                    couleur: ''
                },
                option2: {
                    name: 'sieges baquets',
                    prix: 700,
                    couleur: 'noir alcantara'
                }
            }
        },
        voiture2: {
            modele: 'megane',
            carburant: 'essence',
            portes: '3',
            marque: 'renault',
            options: [
                {
                    name: 'toit ouvrant',
                    prix: 500,
                    couleur: ''
                }
            ]
        },
        voiture3: {
            modele: '500',
            carburant: 'essence',
            portes: '3',
            marque: 'fiat',
            options: [
                {
                    name: 'retroviseurs dégivrants',
                    prix: 350,
                    couleur: 'rouge'
                }
            ]
        }
    },
    garage2: {
        voiture1: {
            modele: 'sandero',
            carburant: 'essence',
            portes: '3',
            marque: 'dacia',
            options: [
                {
                    name: 'clim',
                    prix: 200,
                    couleur: ''
                }
            ]
        },
        voiture2: {
            modele: 'megane',
            carburant: 'essence',
            portes: '3',
            marque: 'renault',
            options: [
                {
                    name: 'radar',
                    prix: 300,
                    couleur: ''
                }
            ]
        },
        voiture3: {
            modele: 'clio',
            carburant: 'essence',
            portes: '3',
            marque: 'peugeot',
            options: {
                option1: {
                    name: 'bluetooth',
                    prix: 100,
                    couleur: ''
                }
            }
        }
    }
}

const garages = Object.values(garagesObject)
for (let garage of garages) {
    const voitures = Object.values(garage)
    for (let voiture of voitures) {
        const options = Object.values(voiture.options)
        for (let option of options) {
            console.log(option.prix)
        }
    }
} */
