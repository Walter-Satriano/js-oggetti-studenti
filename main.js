/*ESERCIZIO:
- Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
  Stampare a schermo attraverso il for in tutte le proprietà.

- Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
  stampare per ognuno nome e cognome.

- Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/


// PARTE 1
// Creo oggetto studente
var studente = {
  "nome": "Walter",
  "cognome": "Satriano",
  "eta": 34
};

// Stampo tutte le proprietà dell'oggetto studente
for (var key in studente) {
  console.log(studente[key]);
}



// PARTE 2
// Creo un array di oggetti di studenti
var arrayStudenti = [
  {"nome": "Carlo", "cognome": "Rossi", "Eta": 24},
  {"nome": "Luisa", "cognome": "Verdi", "Eta": 27},
  {"nome": "Giovanni", "cognome": "Bianchi", "Eta": 19},
  {"nome": "Barbara", "cognome": "Arancioni", "Eta": 34}
];

// Faccio un ciclo sull'array e stampo solo nome e cognome degli studenti
for (var i = 0; i < arrayStudenti.length; i++) {
  console.log(arrayStudenti[i]);

  // creo una variabile di appoggio per verificare ogni singolo studente
  var studente = arrayStudenti[i];
  console.log(studente.nome);
  console.log(studente.cognome);
}
