var moment = require('moment');
var Cliente = require('../models/cliente');
var Prenotazione = require('../models/prenotazione');

var Proiezioni = require('./proiezioni');

var Clienti = [
    new Cliente('Mario','Rossi','1990-04-12','ABC123', []),
    new Cliente('Paolo','Bianchi','1930-03-10','DEF321', []),
    new Cliente('Luca','Brambilla','1939-08-04', null, [])
  ];

module.exports = Clienti;
