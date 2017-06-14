var m = require("mithril");


module.exports = {
  view: function(vnode){
    return m('div', [
      m('nav.navbar.navbar-default', m('div.container-fluid', [
        m('div.navbar-header', m('a.navbar-brand[href=/]', {oncreate: m.route.link}, "Multisala")),
        m('ul.nav.navbar-nav', [
          m('li',m('a[href=/query1]', {oncreate: m.route.link}, 'Query 1')),
          m('li',m('a[href=/query2]', {oncreate: m.route.link}, 'Query 2')),
          m('li',m('a[href=/query3]', {oncreate: m.route.link}, 'Query 3')),
        ])]
      )),
      m("div.container", vnode.children)
    ]);
  }
}
