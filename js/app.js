// Creare ciclo in cui vogliamo i numeri da 1 a 100
for (let i = 0; i < 100; i++ ) {

// Inserisco il numero con l'incremento di uno in modo da far capire al programma
//  di iniziare dal numero 1 e finire non 99 ma 100
    let number = i + 1;

    // Se il numero è divisibile per 5 e per 3 scriverò FizzBuzz
    if (number % 5 === 0 & number % 3 === 0) {
        number = 'FizzBuzz';

    } 
    // Se il numero è divisibile per 3 scriverò Fizz
    if (number % 3 === 0) {
        number = 'Fizz';

    }
    // Se il numero è divisibile per 5 scriverò Buzz
    if (number % 5 === 0) {
        number = 'Buzz';

    } 

    

    console.log(number);

    

    





}