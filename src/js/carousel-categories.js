const btnPrevious = document.querySelector('#btnPreviousCateogry'),
      btnNext = document.querySelector('#btnNextCategory'),
      categoriesContent = document.querySelector('.right-nav__ul__li');

let arrayCategories = ["Todos", "Música", "Deportes", "Belleza", "Mascotas", "Ciencia", "Cine", "Fútbol", "Gamer", "Viajes", "Vlogs", 
            "Unboxing", "Tecnología", "Steamer", "Noticias", "Pódcast", "En tiempo real","Subidos recientemente", "Novedad para ti"];

makeButtons();

let xTranslate = 0;
const pxTranslate = 360;


btnNext.addEventListener('click', nextCategory);
btnPrevious.addEventListener('click', previusCategory);

function contentFunction(){

}
function nextCategory(){
    hidePreviousButton(true);
    showBorderBackground(true);
    translateElements("right");
}

function previusCategory(){
    hidePreviousButton(true);
    showBorderBackground(true);
    translateElements("left");
}

function hidePreviousButton(value){
    if(value){
        btnPrevious.classList.remove('no-visible');
    }
}

function makeButtons(){
    for(let category of arrayCategories){
        let categoryButton = document.createElement("button");
        categoryButton.innerHTML = category;
        categoryButton.classList.add('button');

        (category !== "Todos") 
            ? categoryButton.classList.add('secondayButton') 
            : categoryButton.classList.add('primaryButton');
    
        categoriesContent.appendChild(categoryButton);
    }
}

function showBorderBackground(value){
    if(value){
        categoriesContent.setAttribute('data-class', 'before');
    }
}

function translateElements(translate){

    (translate === "right") 
        ? xTranslate += pxTranslate
        : xTranslate -= pxTranslate;

    let categoriesList = categoriesContent.childNodes;
    for(let i = 1; i < categoriesList.length ; i++){
        categoriesList[i].style.transform = `translateX(-${xTranslate}px)`;
    }
    

}