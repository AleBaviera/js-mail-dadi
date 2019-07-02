// 1 -Chiedi all’utente la sua email,  controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;
// dichiaraz var
var mail, esito;
esito = document.getElementById('mio-id');
console.log(esito);

// creazione array
var mailinglist = ['pino@gmail.com', 'giuse@gmail.com', 'maria@gmail.com', 'fede@gmail.com', 'giulio@gmail.com', 'ale@gmail.com']
console.log(mailinglist);

// inserimento mail utente
mail = prompt('inserisci la tua email');
console.log(mail);
// confronto con array
for (var i = 0; i < mailinglist.length; i++){
  console.log(mailinglist[i]);
  if (mail === mailinglist[i]){

    esito.innerHTML = 'ok, prosegui!';
    console.log(esito);
  }
  else{
    esito.innerHTML = 'non puoi accedere!';
  }
}

// esito
