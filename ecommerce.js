const shipping = 10
const basket = [
    {
        name: 'enceinte bluetooth',
        price: 50,
        quantity: 2,
        marque: 'anker',
        guarantee: {
            duration: 3,
            isActive: true
        },
        color: 'red',
        serialNumber: '24GD545DGD422XQG',
        coupons: {
            discountChristmas: 1,
            discountStudent: 2,
            discountBlackFriday: 2
        }
    },
    {
        name: 'aspirateur',
        price: 500,
        quantity: 1,
        marque: 'dyson',
        guarantee: {
            duration: 2,
            isActive: true
        },
        color: 'white',
        serialNumber: '34KJH234BJKB34',
        coupons: {
            discountChristmas: 5,
            discountStudent: 3,
            discountBlackFriday: 2
        }
    }
]























//450 + 95 = 545 + 10 = 555



                        // SOLUTION //
/* let totalOfBasket = 0;

for (let item of basket) {
    let priceElement = item.price;
    if (item.quantity >= 2) {
        priceElement = item.price * item.quantity;
    }
    const sumOfCoupons = item.coupons.discountChristmas + item.coupons.discountStudent + item.coupons.discountBlackFriday
    const remise = priceElement * sumOfCoupons / 100
    const priceRemised = priceElement - remise
    totalOfBasket = priceRemised + totalOfBasket
}

const totalFinal = totalOfBasket + shipping
console.log('totalFinal', totalFinal)
 */



/* LA BOUCLE FOR OF 

for ( let item of tableau){
    console.log(item)
} */


/* CALCULER UNE REMISE

totalOfbasket 

20E x 10/100
prix x chiffre remise / 100 

*/

                    // INSTRUCTIONS
// Je veux afficher dans la console le prix total de mon panier
// Afficher dans la console le prix total de mon panier avec les coupons.
// Avec une boucle FOR OF  FOR et FOR IN

// faire une fonction qui calcule le prix total de mes articles 
// faire une fonction qui calcule le prix total du panier et la livraison 
// faire une fonction qui calcule une remise 

let totalOfBasket = 0

for (let article of basket) {
    //console.log(totalOfBasket)
    priceOfArticles = article.price;
    //console.log(priceOfArticles)
    //console.log(totalOfBasket)
    if (article.quantity > 1) {
        priceOfArticles = article.price * article.quantity;
    }
    totalOfBasket = priceOfArticles + totalOfBasket
}
console.log(totalOfBasket)