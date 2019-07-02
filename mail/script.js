// 1 -Chiedi all’utente la sua email,  controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;
// dichiaraz var
var mail, esito, messaggio;
esito = document.getElementById('mio-id');
console.log(esito);

// creazione array
var mailinglist = ['pino@gmail.com', 'giuse@gmail.com', 'maria@gmail.com', 'fede@gmail.com', 'giulio@gmail.com', 'ale@gmail.com']
console.log(mailinglist);

// inserimento mail utente
mail = prompt('inserisci la tua email');
console.log(mail);
// confronto con array
messaggio = 'non puoi accedere!';
for (var i = 0; i < mailinglist.length; i++){
  console.log(mailinglist[i]);

  if (mail === mailinglist[i]){

    messaggio = 'ok, prosegui!';
    console.log('ok prosegui');
  }



}

// esito
esito.innerHTML = messaggio;
