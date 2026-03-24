'strict';

// Stampa i numeri da 1 a 100
// usiamo for, per far contarte con +1 ad ogni ciclo ed uscire una volta raggiuno valore 100 ed eseguito il programma


for (let i = 0; i <= 100; i++) { // dichiaro e assegno variabile i con valore 0 per il loop; aggiungi 1 a ogni ciclo fino a che i <=100
    let output = 0; // creiamo variabile output per applicare DRY PRINCIPLE --> voglio scrivere console.log solo una volta
        
        if (i % 3 === 0 && i % 5 === 0) { // se i e'sia multiplo di 3 che di 5, stampa, al;trimenti prosegui;
            output = "FizzBuzz";      // posizioniamo qui la condizione complessa per prioritizzare l'esecuzione nel programma

        }

        else if (i % 3 === 0) {  // se il numero e'multiplo di 3, stampa Fizz
            output = "Fizz";

        }

        else if (i % 5 === 0) {  // se il numero e' multiplo di 5, stampa Buzz
            output = "Buzz";

        }
        
        else { // altrimenti stampa i
            output = i;
        }
        
     console.log(output);
} 


