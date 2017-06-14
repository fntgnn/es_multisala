var _ = require('lodash');

var Sala = function(nome,lastLetter,lastNumber,descrizione){
  this.nome = nome;
  this.lastLetter = lastLetter,
  this.lastNumber = lastNumber,
  this.descrizione = descrizione
};


module.exports = Sala;
