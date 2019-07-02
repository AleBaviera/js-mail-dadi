// Gioco dei dadi, chi fa di più vince;
// il secondo riguarda proprio lo scenario base, quindi ci saranno 2 lanci di dadi e poi noi dovremmo stampare a schermo chi ha vinto, se ha vinto qualcuno.

// dichiaro le var
var miolancio, tuolancio;
// // genero i due lanci random da 1 a 6
miolancio = Math.floor(Math.random() * 6) + 1;
tuolancio = Math.floor(Math.random() * 6) + 1;

// // confronto le due var e dichiaro il vincit
if (miolancio > tuolancio){
  document.getElementById('mio-id').innerHTML = 'il mio lancio: '+ miolancio + '; il tuo lancio: ' + tuolancio + '; quindi non hai vinto';
  //  }
}
else if (miolancio < tuolancio){
  document.getElementById('mio-id').innerHTML = 'il mio lancio: '+ miolancio + '; il tuo lancio: ' + tuolancio + '; quindi hai vinto';
  //  }
}
//
else{
  document.getElementById('mio-id').innerHTML = 'il mio lancio: '+ miolancio + '; il tuo lancio: ' + tuolancio + '; quindi tira ancora';
   }
//
// }




// prova ex con array

// creazione di var array da 1 a 6
// var lancio = [1,2,3,4,5,6];
// var mio, tuo;
//  // due cicli for per sel valore di lancio
//  for (i = 0; i < lancio.length ; i++){
//   console.log(lancio[i]);
//   mio = mio = Math.floor(Math.random()* lancio[i]);
// console.log(lancio[i]);
//   tuo = Math.floor(Math.random()* lancio[i]);
// console.log(lancio[i]);
//   }
// console.log(mio);
// console.log(tuo);
//
//  // visualizza i due lanci
//          // mio = Math.floor(Math.random()* lancio[i]);
//          // console.log(mio);
//          // tuo = Math.floor(Math.random()* lancio[i]);
//          // console.log(tuo);
//
//
//
//  // confronto
//  if (mio < tuo){
//    document.getElementById('mio-id').innerHTML = 'il mio lancio: '+ mio + '; il tuo lancio: ' + tuo + '; quindi hai vinto';
//  }
//  else if (mio > tuo){
//    document.getElementById('mio-id').innerHTML = 'il mio lancio: '+ mio + '; il tuo lancio: ' + tuo + '; quindi non hai vinto';
//  }
//  else{
//    document.getElementById('mio-id').innerHTML = 'il mio lancio: '+ mio + '; il tuo lancio: ' + tuo + '; quindi tira ancora';
//  }

 // messaggio
