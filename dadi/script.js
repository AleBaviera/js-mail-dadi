// Gioco dei dadi, chi fa di più vince;
// il secondo riguarda proprio lo scenario base, quindi ci saranno 2 lanci di dadi e poi noi dovremmo stampare a schermo chi ha vinto, se ha vinto qualcuno.

// dichiaro le var
var miolancio, tuolancio;
// genero i due lanci random da 1 a 6
miolancio = Math.floor(Math.random() * 6) + 1;
tuolancio = Math.floor(Math.random() * 6) + 1;

// confronto le due var e dichiaro il vincit
if (miolancio > tuolancio){
  document.getElementById('mio-id').innerHTML = 'hai vinto'
}
else if (miolancio < tuolancio){
  document.getElementById('mio-id').innerHTML = 'non hai vinto'
}

else{
  document.getElementById('mio-id').innerHTML = 'pari!!!'

}
