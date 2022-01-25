const btnPrevious = document.querySelector('#btnPreviousCateogry'),
      btnNext = document.querySelector('#btnNextCategory'),
      categoriesContent = document.querySelector('.right-nav__ul__li');

let arrayCategories = ["Todos", "Música", "Deportes", "Belleza", "Mascotas", "Ciencia", "Cine", "Fútbol", "Gamer", "Viajes", "Vlogs", 
            "Unboxing", "Tecnología", "Steamer", "Noticias", "Pódcast", "En tiempo real","Subidos recientemente", "Novedad para ti", "Finanzas", "Automóviles", "Comida"];

makeButtons();

let xTranslate = 0;
var categoriesList, 
    categoriesListLength,
    intervalID;
const pxTranslate = 270;


btnNext.addEventListener('click', nextCategory);
btnPrevious.addEventListener('click', previusCategory);

function nextCategory(){
    hidePreviousButton(true);
    translateElements("right");
}

function previusCategory(){
+   hidePreviousButton(true);
    translateElements("left");
}

function hidePreviousButton(value){
    if(value){
        btnPrevious.classList.remove('no-visible');
    } else{
        btnPrevious.classList.add('no-visible');
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

    showBorderBackground(false);
    categoriesList = categoriesContent.childNodes;    
    categoriesListLength = categoriesList.length;
}

function showBorderBackground(value){
    if(value){
        categoriesContent.setAttribute('data-class', 'before');
    } else{
        categoriesContent.removeAttribute('data-class');
    }
}

var countSlide = Math.ceil((categoriesListLength / 3)); // 6 Son las categotias que podemos ver por cada que hacemos un salto saltamos
var contador = 0;

function translateElements(translate){

    if(translate === "right"){
        if(contador === countSlide){
            return;
        }
        xTranslate += pxTranslate;
        contador++;
        showBorderBackground(true);

    } else{
        if(xTranslate >0){
            xTranslate -= pxTranslate;
        }

        if(contador > 0){
            contador--;
            if(contador === 0){
                hidePreviousButton(false);
            }
        } 
        
        if(xTranslate <= 0){
            showBorderBackground(false);
        } else{
            showBorderBackground(true);
        }
    }

    for(let i = 1; i < categoriesListLength ; i++){
        categoriesList[i].style.transform = `translateX(-${xTranslate}px)`;
        if(translate === "right"){
            doAnimation(categoriesList[i], translate, removeList, 'animation');
        } else{
            doAnimation(categoriesList[i], translate, removeList, 'prueba');
        }
    }

}


function doAnimation(button, translateDirection, myCallBack, className){
    button.classList.add(className);
    intervalID = setTimeout(myCallBack, 500, button, translateDirection, className);
}

function removeList(button, translateDirection, className){
    button.classList.remove(className);

    if(translateDirection === "right"){
        document.documentElement.style.setProperty('--animationBefore', `-${Math.abs(xTranslate)}px`);
        document.documentElement.style.setProperty('--animationAfter', `-${Math.abs(xTranslate + pxTranslate)}px`);
    } else{
        document.documentElement.style.setProperty('--animationBefore', `-${Math.abs(xTranslate - pxTranslate)}px`);
        document.documentElement.style.setProperty('--animationAfter', `-${Math.abs(xTranslate)}px`);  
    }
}
