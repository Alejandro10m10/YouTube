const btnPrevious = document.querySelector('#btnPreviousCateogry'),
      btnNext = document.querySelector('#btnNextCategory'),
      categoriesContent = document.querySelector('.right-nav__ul__li');

let arrayCategories = ["Todos", "Música", "Deportes", "Belleza", "Mascotas", "Ciencia", "Cine", "Fútbol", "Gamer", "Viajes", "Vlogs", "Unboxing",
"Tecnología", "Steamer", "Noticias"];

makeButtons();

btnNext.addEventListener('click', nextCategory);

function nextCategory(){
    hidePreviousButton(true);
    showBorderBackground(true);
    translateElements("right");
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

function translateElements(transale){
    if(transale === "right"){
        let categoriesList = categoriesContent.childNodes;
        let translate = 100;
        for(let i = 1; i < categoriesList.length ; i++){
            categoriesList[i].style.transform = "translateX(`{translate}`px)";
        }
    } else{

    }
}