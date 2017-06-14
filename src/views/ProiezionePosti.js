var m = require('mithril');
var moment = require('moment');
var _ = require('lodash');

var Proiezioni = require('../data/proiezioni');
var Sale = require('../data/sale');
var Spettacoli = require('../data/spettacoli');


module.exports = {
  proiezione: null,
  sala: null,

  c2n: function(char){
    return char.charCodeAt() - 64;
  },

  oninit: function(vnode){
    proiezione = Proiezioni[vnode.attrs.id];
    sala = Sale[proiezione.id_sala];
  },

  renderSeats(){
    const max_fila = this.c2n(sala.lastLetter);
    const max_num = sala.lastNumber;
    const table = [];
    for(var i = 0; i<max_fila; i++){
      const row = [];
      for(var j=0; j<max_num; j++){
        const posto = String.fromCharCode(65 + i) + j;
        var ris = _.findIndex(proiezione.occupati, function(item){
          return posto === item.posto;
        });
        if(ris === -1){
          row.push(m('td.libero', posto));
        }
        else{
          row.push(m('td.occupato', posto));
        }
      }
      table.push(m('tr', row));
    }
    return table;
  },

  view: function(){
    return m('div', [
      m('h2','Proiezione del '+moment(proiezione.quando).format('DD/MM/YYYY')+' alle '+moment(proiezione.quando).format('HH:mm')),
      m('h3','Spettacolo: '+Spettacoli[proiezione.id_spettacolo].titolo),
      m('h3','Sala: '+sala.nome),
      m('hr'),
      m('h4','Disposizione posti:'),
      m('table.table-bordered.posti', m('tbody',this.renderSeats())),
      m('div.text-center[style=background-color: lightblue]','schermo')
    ]);
  }
}
