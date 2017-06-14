var m = require("mithril");
var _ = require('lodash');
var config = require('./config');
var moment = require("moment");


var Proiezione = function(id_spettacolo, id_sala, quando) {
  this.id_spettacolo = id_spettacolo;
  this.id_sala = id_sala;
  this.quando = quando;
  this.occupati = [];
};

Proiezione.prototype.saluta = function(){
  console.log("ciao");
  console.log(this);
};

Proiezione.prototype.aggiungiPosto = function(posto, cliente){
  var count = _.countBy(this.occupati, function(item){
    return item.cliente === cliente
  });
  if(count.true === 4){
    console.log("Raggiunto limite max per cliente", cliente.nome, cliente.cognome);
    return -1;
  }
  const res = _.findIndex(this.occupati, function(item){
    return item.posto == posto;
  });
  if(res === -1){
    this.occupati.push({cliente: cliente, posto: posto});
    return 1;
  }
  else{
    return -2;
  }
}

//costo proiezione in base all'ora (prima o dopo sera)
Proiezione.prototype.getCostoProiezione = function(){
    const ora = moment(moment(this.quando).format('HH:mm'), 'HH:mm');
    const fine_mattino = moment(config.fine_matine, 'HH:mm');
    if(ora.isBefore(fine_mattino)){
      return config.costo_matine;
    }
    else{
      return config.costo_sera;
    }
}

Proiezione.prototype.getTotIncasso = function(){
  //console.log(this);
  var tot = 0;
  for(var i = 0; i < this.occupati.length; i++){
    tot += +this.occupati[i].cliente.getCostoProiezioneCliente(this);
  }
  return Math.round(tot * 100) / 100;
}


module.exports = Proiezione;
