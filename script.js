'strict';




// Stampa i numeri da 1 a 100 --> usiamo for, per far contarte con +1 ad ogni ciclo 

for (let i = 0; i <= 100; i++) { // dichiaro e assegno variabile i con valore 0 per il loop; aggiungi 1 a ogni ciclo fino a che i <=100
    
    if (i % 3 === 0) {  // se il numero e'multiplo di 3, stampa fizz
    console.log("fizz");

    }

    else { // altrimenti stampa i
        console.log(i);
    }
} 
