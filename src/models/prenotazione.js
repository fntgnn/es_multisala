var _ = require('lodash');

var Prenotazione = function(proiezione, posto, cliente) {
  this.proiezione = proiezione;
  this.posto = posto;
  this.cliente = cliente;
  proiezione.occupati.push({posto: posto, cliente: cliente});
}

module.exports = Prenotazione;
