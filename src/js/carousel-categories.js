const btnPrevious = document.querySelector('#btnPreviousCateogry'),
      btnNext = document.querySelector('#btnNextCategory'),
      categoriesContent = document.querySelector('.right-nav__ul__li');

let arrayCategories = ["Música", "Deportes", "Belleza", "Mascotas", "Ciencia", "Cine", "Fútbol", "Gamer", "Viajes", "Vlogs", "Unboxing",
"Tecnología", "Steamer", "Noticias"];

makeButtons();

btnNext.addEventListener('click', nextCategory);

function nextCategory(){
    hidePreviousButton(true);
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
    
        categoryButton.classList.add('button', 'secondayButton');
    
        categoriesContent.appendChild(categoryButton);
    }
}