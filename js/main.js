/**
 

Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */

const countries = [
    {
        name: "Svezia",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image: "01.jpg",
    },
    {
        name: "Svizzera",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image: "02.jpg",
    },
    {
        name: "Gran Bretagna",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image: "03.jpg",
    },
    {
        name: "Germania",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image: "04.jpg",
    },
    {
        name: "Paradise",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image: "05.jpg",
    },
];

function insertElements(parent,array){
    for(let i = 0; i<array.length;i++){
        document.querySelector(parent).innerHTML += `
        <div class="my-container-img">
            <img src=img/${array[i].image} alt="">
        </div>
        `;
    }
}


insertElements(".my-carousel-images",countries);
insertElements(".my-thumbnails",countries);

let active = 0;
const containerSmallCard = document.querySelectorAll(".my-thumbnails > .my-container-img");
console.log(containerSmallCard);
const containerBigCard = document.querySelectorAll(".my-carousel-images > .my-container-img");
console.log(containerBigCard);

containerSmallCard[active].classList.add("activeElement-small");
containerBigCard[active].classList.remove("my-container-img");
containerBigCard[active].classList.add("activeElement-big");


const btnPrev = document.querySelector(".my-prev-hook");
btnPrev.addEventListener("click", function(){

    containerSmallCard[active].classList.remove("activeElement-small");
    containerBigCard[active].classList.remove("my-container-img");

    if(active === 0){
        active = countries.length - 1;
    } else {
        active--;
    }

    containerSmallCard[active].classList.add("activeElement-small");
    containerBigCard[active].classList.add("activeElement-big");

});


const btnNext = document.querySelector(".my-next-hook");
btnNext.addEventListener("click",function(){

    containerSmallCard[active].classList.remove("activeElement-small");
    containerBigCard[active].classList.remove("activeElement-big");

    if(active === countries.length - 1){
        active = 0;
    } else{
        active++;
    }

    containerSmallCard[active].classList.add("activeElement-small");
    containerBigCard[active].classList.add("activeElement-big");

});