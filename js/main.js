
const guzzantiCharacter = [
    {
        name: "Quelo",
        quote:" 'Ti chiedi Come mai?, ti chiedi Quasi quasi? Dov'è la risposta?.La risposta non la devi cercare fuori, la risposta è dentro di te. E però è sbagliata!.' ",
        image: "https://giusepperamerini.it/wp-content/uploads/2016/02/Quelo.jpg",
    },
    {
        name: "Robertetti",
        quote:"A questo mondo nessuno ti dà niente per niente, sarebbe una perdita di tempo per tutti e due.",
        image: "https://i.ytimg.com/vi/Q6jIxUHGY3M/hqdefault.jpg",
    },
    {
        name: "Gianfranco Funari",
        quote:" 'Vedi, io sono sempre stato un personaggio scomodo, ma mica per niente è la sciatica, io nun riesco a stà seduto.'",
        image: "https://static.nexilia.it/nextquotidiano/2019/03/corrado-guzzanti.jpg",
    },
    {
        name: "Vulvia",
        quote:"'Mbuto. 'Mbuto. Chi ha inventato il primo 'mbuto? Chi ha usato il primo 'mbuto per travasare l'acqua? Come faceva il primo 'mbuto? Si servivano di uno solo, o più due o più 'mbuti? 'mbuto, su rieducational channel... due o più 'mbuti... 'mbuto! bù'",
        image:"https://pbs.twimg.com/media/EYph7JkX0AcLtKr.jpg",
    },
    {
        name: "Padre Pizarro",
        quote:"'A noi ce interessa la vita dar concepimento alla nascita: già dopo un quarto d'ora nun gliene frega più niente a nessuno. Prova te a cercà un asilo nido.'",
        image: "https://cdn-static.dagospia.com/img/foto/03-2018/corrado-guzzanti-padre-pizzarro-993536.jpg",
    },
];


const thumbnailsParent = document.querySelector(".my-thumbnails");
const carouselImgsParent = document.querySelector(".my-carousel-images");

for(let i = 0; i <  guzzantiCharacter.length; i++){
    carouselImgsParent.innerHTML +=`
    <div class="my-container-img">
    <img src=${guzzantiCharacter[i].image} alt="${guzzantiCharacter[i].name}">
    <div class="my-container-quote p-4">
    <h2>${guzzantiCharacter[i].name}</h2>
    <p>${guzzantiCharacter[i].quote}</p>
    </div>
    </div>
    `;
    
    thumbnailsParent.innerHTML += `
    <div class="my-container-img brightness">
    <img src=${guzzantiCharacter[i].image} alt="${guzzantiCharacter[i].name}">
    </div>
    `;
}

// £add buttons to the html
document.querySelector("#my-after-carousel").innerHTML =`
<button class="btn btn-dark" id="my-btn-forward">Slideshow!</button>
<button class="btn btn-light" id="my-btn-pause">Pause!</button>
<button class="btn btn-danger" id="my-btn-revert">Revert!</button>
<button class="btn btn-dark" id="my-btn-backward">Slideshow backward!</button>
`;

// £ call of the function that starts the eventlisteners(click on btn: next/prev slideshow/pause)
start();


//  ! *************************** revert the array *******************************
const btnRevert = document.getElementById("my-btn-revert");
btnRevert.addEventListener("click",function(){
    
    thumbnailsParent.innerHTML = " ";
    thumbnailsParent.innerHTML += `
    <div class="my-previous position-absolute">
    <span class="my-prev-hook"></span>
    </div>
    <div class="my-next position-absolute">
    <span class="my-next-hook"></span>
    </div>
    `;
    carouselImgsParent.innerHTML = " ";
    
    guzzantiCharacter.reverse();
    
    for(let i = 0; i <  guzzantiCharacter.length; i++){
        carouselImgsParent.innerHTML +=`
        <div class="my-container-img">
        <img src=${guzzantiCharacter[i].image} alt="${guzzantiCharacter[i].name}">
        <div class="my-container-quote p-4">
        <h2>${guzzantiCharacter[i].name}</h2>
        <p>${guzzantiCharacter[i].quote}</p>
        </div>
        </div>
        `;
        
        thumbnailsParent.innerHTML += `
        <div class="my-container-img brightness">
        <img src=${guzzantiCharacter[i].image} alt="${guzzantiCharacter[i].name}">
        </div>
        `;
    }
    
    
    start();
    
    
});



//     !----------------- Function ----------------------
function start(){
    
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
    
    // # prev 
    const btnPrev = document.querySelector(".my-prev-hook");
    btnPrev.addEventListener("click", function(){
        
        containerBigCard[active].classList.add("my-container-img");
        containerBigCard[active].classList.remove("activeElement-big");
        
        containerSmallCard[active].classList.remove("activeElement-small");
        
        if(active === 0){
            active = guzzantiCharacter.length - 1;
        } else {
            active--;
        }
        
        containerSmallCard[active].classList.add("activeElement-small");
        containerBigCard[active].classList.remove("my-container-img");
        containerBigCard[active].classList.add("activeElement-big");
        
    });
    
    //# next
    const btnNext = document.querySelector(".my-next-hook");
    btnNext.addEventListener("click",function(){
        
        containerSmallCard[active].classList.remove("activeElement-small");
        containerBigCard[active].classList.add("my-container-img");
        containerBigCard[active].classList.remove("activeElement-big");
        
        if(active === guzzantiCharacter.length - 1){
            active = 0;
        } else{
            active++;
        }
        
        containerSmallCard[active].classList.add("activeElement-small");
        containerBigCard[active].classList.remove("my-container-img");
        containerBigCard[active].classList.add("activeElement-big");
        
    });
    
    
    
    
    // %Forward slider
    const btnForward = document.querySelector("#my-btn-forward");
    btnForward.addEventListener("click",function(){
        
        const scrollInetrval = setInterval(scrollTime,2000);
        function scrollTime(){
            containerSmallCard[active].classList.remove("activeElement-small");
            containerBigCard[active].classList.add("my-container-img");
            containerBigCard[active].classList.remove("activeElement-big");
            
            if(active === guzzantiCharacter.length - 1){
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
    
    // % BACKWARD SLIDER
    const btnBackward = document.querySelector("#my-btn-backward");
    btnBackward.addEventListener("click",function(){
        
        const scrollInetrvalBack = setInterval(scrollBack,2000);
        function scrollBack(){
            containerBigCard[active].classList.add("my-container-img");
            containerBigCard[active].classList.remove("activeElement-big");
            
            containerSmallCard[active].classList.remove("activeElement-small");
            
            if(active === 0){
                active = guzzantiCharacter.length - 1;
            } else {
                active--;
            }
            
            containerSmallCard[active].classList.add("activeElement-small");
            containerBigCard[active].classList.remove("my-container-img");
            containerBigCard[active].classList.add("activeElement-big");
        }
        
        const btnPause = document.querySelector("#my-btn-pause");
        btnPause.addEventListener("click",function(){
            
            clearInterval(scrollInetrvalBack);
            
        });
    });
}



