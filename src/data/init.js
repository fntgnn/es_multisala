var Clienti = require('./clienti');
var Proiezioni = require('./proiezioni');

module.exports = {
  inizializzaClientiPrenotazioni: function(){
    Clienti[0].effettuaOrdine(Proiezioni[0], 'A1');
    Clienti[0].effettuaOrdine(Proiezioni[0], 'A3');
    Clienti[0].effettuaOrdine(Proiezioni[0], 'A4');
    Clienti[0].effettuaOrdine(Proiezioni[0], 'A5');
    Clienti[0].effettuaOrdine(Proiezioni[0], 'B3');   //raggiunto limite massimo per cliente
    Clienti[1].effettuaOrdine(Proiezioni[0], 'A2');
    Clienti[2].effettuaOrdine(Proiezioni[0], 'A1');   //posto già assegnato
    Clienti[1].effettuaOrdine(Proiezioni[1], 'A2');
    Clienti[2].effettuaOrdine(Proiezioni[2], 'A2');
    Clienti[2].effettuaOrdine(Proiezioni[0], 'C4');
    Clienti[2].effettuaOrdine(Proiezioni[0], 'X100'); //posto non disponibile
  }
};
