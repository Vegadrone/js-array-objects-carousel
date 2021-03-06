
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

//Take wrapper and buttons from DOM
const carouselWrapper = document.getElementById('carousel-wrapper');
const slide = document.createElement('div');
slide.classList.add('slide');



images.forEach((element, index, array) => {
    carouselWrapper.append(slide);
    slide.innerHTML += `<h1 class="t-white">${element.title}</h1>
        <p class="t-white">${element.description}</p>
        <img src="${element.url}" alt="current-image">`
}
);
    
   
// nextButton.addEventListener('click', function () {

//     imgElementList[imgElementActive].classList.remove('active');

//     imgElementActive++;

//     if (imgElementActive === imgElementList.length) {
//         imgElementActive = 0;
//     }

//     imgElementList[imgElementActive].classList.add('active');
// })