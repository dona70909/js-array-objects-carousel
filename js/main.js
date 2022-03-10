
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

/**
 * A function that returns an array of html elements 
 * each element contains a value taken from the array scrolled with the for iteration
 * @param {*} parent element to wich you add the html element
 * @param {*} array from wich you take the properties and their value
 * @returns {*} an array of htmlElements 
 */
function insertElements(parent,array){
    const element = document.querySelector(parent);
    const htmlElements = [];
    for(let i = 0; i<array.length;i++){
        element.innerHTML += `
        <div class="my-container-img brightness">
            <img src=img/${array[i].image} alt="${array[i].name}">
        </div>
        `;
        htmlElements.push(element);
    }

    return htmlElements;
}

// £ print inside the html the list of elements big and small imgs
//insertElements(".my-carousel-images",countries);
insertElements(".my-thumbnails",countries);

for(let i = 0; i < countries.length; i++){
    document.querySelector(".my-carousel-images").innerHTML +=`
    <div class="my-container-img">
        <img src=img/${countries[i].image} alt="${countries[i].name}">
        <div class="my-container-description p-2">
            <h2> ${countries[i].name} </h2>
            <p> ${countries[i].description}</p>
        </div>
    </div>
    `;
}

// #active element counter
let active = 0;
const containerSmallCard = document.querySelectorAll(".my-thumbnails > .my-container-img");
console.log(containerSmallCard);
const containerBigCard = document.querySelectorAll(".my-carousel-images > .my-container-img");
console.log(containerBigCard);

// # first images
containerSmallCard[active].classList.add("activeElement-small");
containerBigCard[active].classList.remove("my-container-img");
containerBigCard[active].classList.add("activeElement-big");

// # prev and next
const btnPrev = document.querySelector(".my-prev-hook");
btnPrev.addEventListener("click", function(){

    containerBigCard[active].classList.add("my-container-img");
    containerBigCard[active].classList.remove("activeElement-big");

    containerSmallCard[active].classList.remove("activeElement-small");

    if(active === 0){
        active = countries.length - 1;
    } else {
        active--;
    }

    containerSmallCard[active].classList.add("activeElement-small");
    containerBigCard[active].classList.remove("my-container-img");
    containerBigCard[active].classList.add("activeElement-big");

});


const btnNext = document.querySelector(".my-next-hook");
btnNext.addEventListener("click",function(){

    containerSmallCard[active].classList.remove("activeElement-small");
    containerBigCard[active].classList.add("my-container-img");
    containerBigCard[active].classList.remove("activeElement-big");

    if(active === countries.length - 1){
        active = 0;
    } else{
        active++;
    }

    containerSmallCard[active].classList.add("activeElement-small");
    containerBigCard[active].classList.remove("my-container-img");
    containerBigCard[active].classList.add("activeElement-big");

});

// £add buttons to the html
document.querySelector("#my-after-carousel").innerHTML =`
<button class="btn btn-dark" id="my-btn-play">Slideshow!</button>
<button class="btn btn-light" id="my-btn-pause">Pause!</button>
`;


// %play and stop with timing functions
const btnPlay = document.querySelector("#my-btn-play");
btnPlay.addEventListener("click",function(){

    const scrollInetrval = setInterval(scrollTime,2000);
    function scrollTime(){
        containerSmallCard[active].classList.remove("activeElement-small");
        containerBigCard[active].classList.add("my-container-img");
        containerBigCard[active].classList.remove("activeElement-big");
    
        if(active === countries.length - 1){
            active = 0;
        } else{
            active++;
        }
    
        containerSmallCard[active].classList.add("activeElement-small");
        containerBigCard[active].classList.remove("my-container-img");
        containerBigCard[active].classList.add("activeElement-big");
    }

    const btnPause = document.querySelector("#my-btn-pause");
    btnPause.addEventListener("click",function(){

        clearInterval(scrollInetrval);
    
    });
});


