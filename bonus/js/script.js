// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

Vue.config.devtools = true;

const firstApp = new Vue (
    {
        el: '#root',
        data: {
            titleText: 'Dubai\'s Skyline',
            titleClass: 'blue',


            imageSrc: 'https://blog.goway.com/globetrotting/wp-content/uploads/2014/07/dubai-skyline-impact-image-800x280.jpg'
        }
    }
);

