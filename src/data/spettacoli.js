var m = require("mithril");
var moment = require("moment");

var Spettacolo = require('../models/spettacolo');

var Spettacoli = [
    new Spettacolo('Into the wild', '120:00'),
    new Spettacolo('Back to the future', '120:00'),
    new Spettacolo('Kill Bill', '120:00')
];

module.exports = Spettacoli;
