# Consegna

FizzBuzz
nome repo: js-fizzbuzz

Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Buon lavoro e buon divertimento! 🙂

# Ragionamento

// Stampa i numeri da 1 a 100 --> usiamo for, per far contarte con +1 ad ogni ciclo 
// se il numero e'multiplo di 3, stampa fizz 
//         --> per vedere se e'multiplo di 3 dobbiamo avere che % 3 === 0
// se il numero e'multiplo di 5 stampa buzz
//        --> per vedere se e'multiplo di 3 dobbiamo avere che % 5 === 0
// se il numero e' const multi3 && const multi5, allora stampa fizzbuzz
