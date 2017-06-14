var m = require('mithril');


module.exports = {

  view: function(){
    return m('div', [
      m('h2','Esercizio per candidati sviluppatori'),
      m('h3','Multisala cinematografica'),
      m('h4','Tecnologie utilizzate'),
      m('p','Il codice è stato scritto interamente in Javascript utilizzando Express come framework per Node.js, Mithril.js come framework client-side e Moment.js per la gestione delle date e delle ore. Ho utilizzato Mithril.js perchè è un framework semplice, veloce e leggero.')]);
  }
}
