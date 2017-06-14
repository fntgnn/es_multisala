var m = require('mithril');
var _ = require('lodash');
var moment = require('moment');

var Proiezioni = require('../data/proiezioni');
var Sale = require('../data/sale');

module.exports = {
  render2Query(inizio, fine){
    const incassi = [];
    const ogg = _.groupBy(Proiezioni, 'id_sala');
    _.forEach(ogg, function(sala, index){
      var tot = 0;
      _.forEach(sala, function(proiezione){
        if(moment(proiezione.quando).isAfter(inizio) && moment(proiezione.quando).isBefore(fine)){
          tot += proiezione.getTotIncasso();
        }
      });
      incassi.push(m('tr',[
        m('td', Sale[index].nome),
        m('td', tot),
      ]));
    });
    return incassi;
  },

  view: function(){
    inizio = '2017-06-11';
    fine = '2017-06-14';
    return m('div',[
      m('h3','Seconda query'),
      m('h4', 'Totale incassato per sala in un determinato periodo di giorni'),
      m('h5','Inizio: '+moment(inizio).format('DD/MM/YYYY')+' Fine: '+moment(fine).format('DD/MM/YYYY')),
      m('table.table.table-striped', [
        m('thead', m('tr', [
          m('th', 'Sala'),
          m('th', 'Incasso (€)')
        ])),
        m('tbody',this.render2Query(inizio, fine))
      ])
    ]);
  }
}
