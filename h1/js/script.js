// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

Vue.config.devtools = true;

const firstApp = new Vue (
    {
        el: '#root',
        data: {
            titleText: 'Questo è il mio primo titolo con VueJs',
            titleClass: 'red'
        }
    }
);