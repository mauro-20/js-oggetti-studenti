/**
 * Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
 */

//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var student = {
  'nome': 'Ugo',
  'cognome': 'Fantozzi',
  'eta': 53
};
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in student) {
  console.log(`${key}: ${student[key]}`);
}
//Creare un array di oggetti di studenti.
var students = [
  student,
  {
    'nome': 'Giuseppe',
    'cognome': 'Garibaldi',
    'eta': 42
  },
  {
    'nome': 'Makoto',
    'cognome': 'Mitsumoto',
    'eta': 26
  },
  {
    'nome': 'Enzo',
    'cognome': 'Ferrari',
    'eta': 34
  }
];
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < students.length; i++) {
  console.log(`${students[i].nome} ${students[i].cognome}`);
}
//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
function addStudent() {
  var fisrtName = prompt('inserisci il nome del nuovo studente');
  var lastName = prompt('inserisci il cognome');
  var age = parseInt(prompt('inserisci l\'età'));
  var student = {
    'nome': fisrtName,
    'cognome': lastName,
    'eta': age
  };
  students.push(student);
}

addStudent();
console.log(students);