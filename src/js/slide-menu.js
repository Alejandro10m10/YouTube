const btnMenu = document.querySelector('#btnMenu'),
      sidebar = document.querySelector('.sidebar'),
      closeSidebar = document.querySelector('.sidebar__background'),
      sidebarContent = document.querySelector('.sidebar__content');

btnMenu.addEventListener('click', showSidebar);
sidebarContent.addEventListener('click', hola);
closeSidebar.addEventListener('click', closeSideBar);

function hola(){
    console.log('hice click en el contenido');
}

function showSidebar(){
    sidebar.classList.add('block');
    sidebar.classList.remove('no-display');
}

function closeSideBar(){
    sidebar.classList.add('no-display');
    sidebar.classList.remove('block');
}