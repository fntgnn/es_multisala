var m = require("mithril");
var moment = require("moment");

var Proiezione = require('../models/proiezione');

// Proiezione(id_spettacolo, id_sala, quando)
var Proiezioni = [
    new Proiezione(0, 0, '2017-06-12 20:30'),
    new Proiezione(0, 0, '2017-06-12 22:30'),
    new Proiezione(1, 1, '2017-06-13 14:30')
];

module.exports = Proiezioni;
