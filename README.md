# Esercizio per candidati sviluppatori
## Multisala cinematografica

Demo: http://fntgnn-multisala.herokuapp.com/


### Installazione
* Installare i moduli con `npm install`
* Per fare eventuali modifiche eseguire il comando `npm run client` per avere un reload automatico dei moduli e del bundle
* `npm start` per far partire l'applicazione express
* Aprire http://localhost:3000

### Tecnologie utilizzate
Il codice è stato scritto interamente in Javascript.

* [Express.js](http://expressjs.com/) framework per Node.js
* [Mithril.js](https://mithril.js.org/) framework client-side.
Ho utilizzato Mithril.js perchè è un framework semplice, veloce e leggero.
* [Moment.js](https://momentjs.com/) per la gestione delle date e delle ore
* [Lodash](https://lodash.com/) utility per gestione array

### Struttura dell'applicazione
#### Applicazione
L'applicazione è divisa per query:
1. totale incassato per singola proiezione
1. totale incassato per sala in un determinato periodo di giorni
1. totale incassato per ogni Film/Spettacolo

Nella prima query sono presenti i link per visualizzare in ogni proiezione i posti disponibili (in verde) e i posti occupati (in rosso):
>Per ogni sala deve essere possibile stabilire precisamente quali siano i posti occupati  e quali siano quelli ancora liberi, in modo da poter evitare di assegnare, all'interno della stessa proiezione, lo stesso posto più di una volta. Il vincolo deve essere forte.


#### File e directory
Il codice sviluppato si trova nella cartella `src`. In questo folder esistono tre cartelle principali:
* `data`: contenente i diversi dati di inizializzazione. In particolare nel file `init.js` ho testato anche i vincoli dati dal testo dell'esercizio: (max 4 posti per cliente, controllo prenotazione di un posto già occupato per proiezione, controllo posto maggiore del massimo in una sala). Il risultato si può vedere nella console del browser.
* `models`: contenente il codice principale dell'applicazione
* `views`: contenente il codice per il rendering delle query sul browser.
