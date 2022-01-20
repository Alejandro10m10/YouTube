const btnMenu = document.querySelector('#btnMenu'),
      sidebar = document.querySelector('.sidebar'),
      btncloseSideBar = document.querySelector('#btnCloseMenu'),
      closeSidebarBackground = document.querySelector('.sidebar__background'),
      sidebarContent = document.querySelector('.sidebar__content');


btnMenu.addEventListener('click', showSidebar);
//sidebarContent.addEventListener('click', hola);
closeSidebarBackground.addEventListener('click', closeSideBar);
btncloseSideBar.addEventListener('click', closeSideBar);

window.addEventListener('resize', reportWindowSize);

function decreaseSidebar(){
    pageWidth = document.documentElement.scrollWidth;

    return (pageWidth < 1200) ? true: false;
}

function showSidebar(){
    if(decreaseSidebar()){
        sidebar.classList.add('block');
        sidebar.classList.remove('no-display');
    } else{
        console.log('hacer pequeño');
    }
}

function closeSideBar(){
    sidebar.classList.add('no-display');
    sidebar.classList.remove('block');
}