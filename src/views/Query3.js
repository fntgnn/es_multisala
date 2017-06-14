var m = require('mithril');
var _ = require('lodash');
var moment = require('moment');

var Proiezioni = require('../data/proiezioni');
var Sale = require('../data/sale');
var Spettacoli = require('../data/spettacoli');

module.exports = {
  render3Query(inizio, fine){
    const incassi = [];
    const ogg = _.groupBy(Proiezioni, 'id_spettacolo');
    _.forEach(ogg, function(spettacolo, index){
      var tot = 0;
      _.forEach(spettacolo, function(proiezione){
        tot += proiezione.getTotIncasso();
      });
      incassi.push(m('tr',[
        m('td', Spettacoli[index].titolo),
        m('td', tot),
      ]));
    });
    return incassi;
  },

  view: function(){
    inizio = '2017-06-11';
    fine = '2017-06-14';
    return m('div',[
      m('h3','Terza query'),
      m('h4', 'Totale incassato per ogni Film/Spettacolo'),
      m('table.table.table-striped', [
        m('thead', m('tr', [
          m('th', 'Film'),
          m('th', 'Incasso (€)')
        ])),
        m('tbody',this.render3Query(inizio, fine))
      ])
    ]);
  }
}
