// Consegna:
// Dato un array di oggetti letterali con:
// url dell’immagine
// titolo
// descrizione
// Creare un carosello come nella foto allegata.
//     Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container 
// e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
//     Milestone 2:
// Aggiungere il ciclo infinito del carosello.Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, 
// la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
//     BONUS 1:
// Aggiungere le thumbnails(sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
//     BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo(3 secondi) l’immagine attiva dovrà cambiare alla successiva.
//     BONUS 3: Aggiungere bottoni di start / stop e di inversione del meccanismo di autoplay.



const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// const imgWrapper = document.getElementById('img-wrapper');
// const imgElement = document.createElement('img')
// const nextButton = document.getElementById('next-btn');
// const previousButton = document.getElementById('previous-btn');

// //!PER EVITARE DI METTERE TUTTE LE IMG A MANO CREO UN CICLO FOR E CI METTO:
// //! - LA COSTANTE PER LA CREAZIONE DEI TAG IMG.
// //! - "container-parent".append PER METTERE ALL'INTERNO I TAG CREATI SOPRA.
// //! - UN "elemento".classList.add PER AGGIUNGERE AD OGNI NUOVO TAG IMG CREATO UNA O + CLASSI A MIA SCELTA.
// //! - UN "elemento".setAttribute ('src', nomeArray [i]) PER METTERE DENTRO OGNI ATTRIBUTO SRC CREATO SU OGNI TAG
// //!   IMG CREATO SOPRA IL LINK CHE CORRISPONDE ALL'INDICE DI OGNI ELEMENTO DELL'ARRAY.

// for (let i = 0; i < images.length; i++) {
//     const imgElement = document.createElement('img');
//     imgWrapper.append(imgElement);
//     imgElement.classList.add('ms_img');
//     imgElement.setAttribute('src', images[i]);
// }

// //! CREO UNA LISTA DI IMMAGINI PRENDENDO L'IMG WRAPPER E TARGETTANDONE I FIGLI IN QUESTO MODO (imgWrapper.children)
// //! I FIGLI SONO STATI GENERATI PRIMA CON IL CICLO FOR
// //! QUESTO SI COMPORTERà COME SE FOSSE UN'ARRAY.
// //! CREO UNA LET DANDOGLI UN NOME E SCEGLIENDO IL NUMERO (CHE POI SARà L'INDICE DELL'"ARRAY" LISTA DI IMMAGINI) DA CUI 
// //! VOGLIO PARTIRE.


// const imgElementList = imgWrapper.children;
// let imgElementActive = 0

// //!ASSEGNO LA CLASSE ACTIVE ALL'ELEMENTO DELLA LISTA DI IMG CREATA CHE HO SCELTO CREANDO LA LET. 
// //!IN QUESTO MODO L'IMG SI VEDE.

// imgElementList[imgElementActive].classList.add('active');

// //!FACCIO PARTIRE LEVENT CLICK E DENTRO METTO:
// //! - RIMUOVO DALL'ELEMENTO ATTIVO LA CLASSE ACTIVE
// //! - INCREMENTO IL CONTATORE DI UNO CON ++ SULLA LET CREATA CON IL NUMERO DELL'INDICE DEL NUOVO "ARRAY" LISTA IMG
// //! - CREO UNA CONDIZIONE IF PER IL QUALE SE IL NUMERO DELL'INDICE è UGUALE AL NUMERO DELLA LUNGEZZA DEL NUOVO ARRAY
// //! - ESSO RIPARTIRà DA ZERO MANDANDO IN LOOP IL CAROSELLO.
// //! - DO ALL'IMMAGINE DOPO (QUELLA CHE è DIVENTATA ATTIVA DOPO AVER DATO ++ AL NUMERO DELL'INDICIE LA CLASSE ACTIVE).
// //! - PER OGNI CLICK SUL BOTTONE SUCCEDERà:
// //!     - RIMUOVO LA CLASSE ACTIVE DA [0]
// //!     - AUMENTO DI UNO E QUINDI [0] DIVENTERà [1] TARGETTANDO L'IMMAGINE CON INDICE 1 NELLA LISTA DELLE IMG
// //!     - FINCHè L'INDICE (IN QUESTO CASO [1]) è MINORE DEL NUMERO PIù ALTO NELLA LISTA [5]
// //!       IL CAROSELLO ANDRà AVANTI. SE DIVENTA UGUALE L'INDICE RITORNA AD ESSERE [0]
// //!     - AGGIUNGO LA CLASSE ACTIVE ALL'ELEMENTO ATTIVO E CIOè [1] 


// nextButton.addEventListener('click', function () {

//     imgElementList[imgElementActive].classList.remove('active');

//     imgElementActive++;

//     if (imgElementActive === imgElementList.length) {
//         imgElementActive = 0;
//     }

//     imgElementList[imgElementActive].classList.add('active');
// })

// const clock = setInterval(slideshow, 3000)

// function slideshow() {

//     imgElementList[imgElementActive].classList.remove('active');

//     imgElementActive++;

//     if (imgElementActive === imgElementList.length) {
//         imgElementActive = 0;
//     }

//     imgElementList[imgElementActive].classList.add('active');
// }

// //!FACCIO PARTIRE LEVENT CLICK E DENTRO METTO:
// //! - FUNZIONA UGUALE A SOPRA CON LA DIFFERENZA CHE IL CONTATORE VA A DECREMENTARE --
// //! - E CHE L'INDICE PER LOOPARE DEVE ESSERE UGUALE A -1 POICHé IL PRIMO ELEMENTO DELL'ARRAY è UGUALE A 0
// //! - IL CONTATORE DEVE RIPARTIRE DA [5] PER          CHé L'ULTIMO ELEMENTO DELL'ARRAY HA INDICE [5] ESSENDO L'ARRAY COMPOSTO
// //!   DA 6 ELEMENTI.

// previousButton.addEventListener('click', function () {

//     imgElementList[imgElementActive].classList.remove('active');

//     imgElementActive--;

//     if (imgElementActive === -1) {
//         imgElementActive = 5;
//     }

//     imgElementList[imgElementActive].classList.add('active');
// })