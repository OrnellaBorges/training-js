// BOUCLES GRAPHIKART

//               BOUCLE WHILE = Tant que 

            /* permettre de répéter une série d'instructions
            tant qu'une condition donnée est vraie 
            c'est-à-dire tant que la condition de 
            sortie n'est pas vérifiée.
            */
// Syntaxe: 

/* let i = 0; 

// condition 
while(i < 10) {

    //instruction
    console.log("Bonjour " + i)
    //incrementation  (i = i + 1 ou i++)
    i = i + 1
} */

//               BOUCLE FOR = Pour 
// Syntaxe: 
        // for(valeur de départ; condition ; incrementation){}

            /* permet d'executer une instruction un certain nombre de fois 
            
            for(let i = 0; i < 10; i++){
                console.log('bonjour')
            }
            
            
            ET
            permet de parcourir les elements d'un tableau ou d'un 
            objet dont on connais la fin. 

            Note : pas besoin de declarer la variable anonyme i à l'extérieur

            */

const tableau = [1, 2, 3, true, false, "coucou"]

for(let i = 0; i < tableau.length; i++){

    console.log('le tableau :', tableau)// affiche le tableau tant de fois qu'il y a d'elément dans le tableau 

    console.log("l'index du tableau :", i) // affiche les index jusqu'a la fin du tableau

    console.log("la valeur dans l'index :", tableau[i]) // affiche la valeur des éléments dans le tableau jusqu'a la fin du tableau
}

for(let i = O; i < 10; i++){

}
