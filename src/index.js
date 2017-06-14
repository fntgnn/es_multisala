var m = require("mithril");

var Home = require("./views/Home");
var Query1 = require("./views/Query1");
var Query2 = require("./views/Query2");
var Query3 = require("./views/Query3");
var ProiezionePosti = require("./views/ProiezionePosti");
var Layout = require("./views/Layout");

var init = require('./data/init');
init.inizializzaClientiPrenotazioni();
//Clienti.inizializza();

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(Layout, m(Home));
        }
    },
    "/proiezione/:id": {
        render: function(vnode) {
            return m(Layout, m(ProiezionePosti, vnode.attrs));
        }
    },
    "/query1": {
      render: function() {
          return m(Layout, m(Query1));
      }
    },
    "/query2": {
      render: function() {
          return m(Layout, m(Query2));
      }
    },
    "/query3": {
      render: function() {
          return m(Layout, m(Query3));
      }
    }
})
