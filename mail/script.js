// 1 -Chiedi all’utente la sua email,  controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;
// dichiaraz var
var mail;

// creazione array
var mailinglist = ['pino@gmail.com', 'giuse@gmail.com', 'maria@gmail.com', 'fede@gmail.com', 'giulio@gmail.com', 'ale@gmail.com']
console.log(mailinglist);

// inserimento mail utente
mail = prompt('inserisci la tua email');
console.log(mail);
// confronto con array
for (var i = 0; i <= mailinglist.length; i++){
  if (mail === mailinglist[i]){
    document.getElementById('mio-id').innerHTML = 'ok, prosegui!';
  }
  else{
    document.getElementById('mio-id').innerHTML = 'non puoi accedere!';
  }
}

// esito
