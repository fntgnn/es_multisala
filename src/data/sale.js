var m = require("mithril");
var moment = require('moment');
var Sala = require('../models/sala');

var Sale = [
    new Sala('Principale','C',10,'Sala principale con dolby'),
    new Sala('Seconda','B',3,'Sala secondaria senza dolby')
];


module.exports = Sale;
