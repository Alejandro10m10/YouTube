// Variables para la funcionalidad del menu de busqueda
let btnOpenSearch = document.querySelector("#open-search-video-content"),
    btnCloseSearch = document.querySelector("#close-search-video-content")

    searchContent = document.querySelector(".search-video"),

    header = document.querySelector(".top-nav__ul__li__center"),
    topHeaderLeft = document.querySelector(".top-nav__ul__li__left"),
    topHeaderRight = document.querySelector(".top-nav__ul__li__right"),
    
    microphoneIcon = document.querySelector('.top-nav__ul__li__microphoneIcon');

let pageWidth;
let openSearch = false;

btnOpenSearch.addEventListener('click', openSearchContent);
btnCloseSearch.addEventListener('click', closeSearchContent);

window.addEventListener('resize', reportWindowSize);

function openSearchContent(){
    topHeaderLeft.style.display = "none";
    topHeaderRight.style.display = "none";
    btnOpenSearch.style.display = "none";

    searchContent.style.display = "flex";

    searchContent.style.width = "100%";

    btnCloseSearch.style.display = "block";

    header.style.margin = "0";
    microphoneIcon.style.background = "transparent";
    microphoneIcon.style.padding = "0";
    microphoneIcon.style.marginRight = "15px";
    microphoneIcon.style.height = "24px";

    openSearch = true;
    
}

function closeSearchContent(){
    topHeaderLeft.removeAttribute("style");
    topHeaderRight.removeAttribute("style");
    btnOpenSearch.removeAttribute("style");

    searchContent.removeAttribute("style");

    btnCloseSearch.removeAttribute("style");

    header.removeAttribute("style");
    microphoneIcon.removeAttribute("style");

    openSearch = false;
}


function reportWindowSize(){
    pageWidth = document.documentElement.scrollWidth;
    if(pageWidth >= 660 && openSearch === true){ //Proceso que solo se ejecuta una vez, (no necesito que el proceso se repita, puesto que solo se gastaria ejecuciones innecesarias)
        closeSearchContent();
    }
}