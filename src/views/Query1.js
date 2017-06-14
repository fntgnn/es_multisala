var m = require('mithril');
var _ = require('lodash');
var moment = require('moment');

var Clienti = require('../data/clienti');
var Proiezioni = require('../data/proiezioni');
var Sale = require('../data/sale');
var Spettacoli = require('../data/spettacoli');


module.exports = {

  render1Query: function(){
    var res = _.map(Proiezioni, function(item, index){
      return m('tr', [
        m('td', m('a[href=/proiezione/'+index+']',{oncreate: m.route.link}, moment(item.quando).format('DD/MM/YYYY'))),
        m('td',moment(item.quando).format('HH:mm')),
        m('td',Spettacoli[item.id_spettacolo].titolo),
        m('td',Sale[item.id_sala].nome),
        m('td',item.getTotIncasso())
      ]);
    });

    //ordino dalla più recente
    res = _.sortBy(res, function(item){
      return new moment(item.children[0].text, 'DD/MM/YYYY');
    }).reverse();
    return res;
  },

    view: function(){
      return m('div',[
        m('h3','Prima query'),
        m('h4', 'Totale incassato per singola proiezione'),
        m('table.table.table-striped', [
          m('thead', m('tr', [
            m('th', 'Proiezione'),
            m('th', 'Ora'),
            m('th', 'Spettacolo'),
            m('th', 'N. sala'),
            m('th', 'Incasso (€)')
          ])),
          m('tbody',this.render1Query())
        ])
      ]);
    }


}
