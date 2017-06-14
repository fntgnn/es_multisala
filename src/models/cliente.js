var m = require("mithril");
var _ = require('lodash');
var config = require('./config');
var moment = require("moment");

var Proiezione = require('./proiezione');
var Sale = require('../data/sale');


var Cliente = function(nome, cognome, data_nascita, tessera, prenotazioni) {
  this.nome = nome;
  this.cognome = cognome;
  this.data_nascita = data_nascita;
  this.tessera = tessera;
  this.prenotazioni = prenotazioni;
}

Cliente.prototype.effettuaOrdine = function(proiezione, posto){
  const sala = Sale[proiezione.id_sala];
  // console.log(sala.lastNumber,+posto[1], sala.lastNumber < +posto[1]);
  if(sala.lastLetter<posto[0] || sala.lastNumber < +posto.substring(1)){
    console.log("posto "+posto+" non valido. Max disponibile: "+sala.lastLetter+sala.lastNumber);
    return;
  }
  const ris = proiezione.aggiungiPosto(posto, this);
  if(ris === 1){
    this.prenotazioni.push({proiezione: proiezione, posto: posto});
  }
  else if(ris === -2){
    console.log("Posto già assegnato");
  }
}

Cliente.prototype.getSconto = function(){
  const anni = moment().diff(this.data_nascita, 'years');
  if(anni <= 16 || anni >= 65 && this.tessera)
    return 3 * 0.80;
  else if(anni <= 16 || anni >= 65)
    return 3;
  else
    return false;
}


Cliente.prototype.getCostoProiezioneCliente = function(proiezione){
  // console.log(this);
  // console.log(proiezione);
  const sconto = this.getSconto();
  if(sconto){
    return sconto;
  }
  else {
    if(this.tessera) {
      return proiezione.getCostoProiezione() * 0.80;
    }
    return proiezione.getCostoProiezione();
  }
}


module.exports = Cliente;
