const toggler = document.querySelector('#nav-toggle');
const sidebar = document.querySelector('#sidebar');

toggler.addEventListener('click', showNav);

function showNav(e) {
    // sidebar.classList.toggle('sidebar-active');
    if (sidebar.classList.contains('sidebar-shown')) {
        sidebar.classList.toggle('sidebar-shown');
        sidebar.classList.toggle('sidebar-active');
    } else if (sidebar.classList.contains('sidebar-active')) {
        sidebar.classList.toggle('sidebar-active');
        sidebar.classList.toggle('sidebar-shown');
    } else {
        sidebar.classList.toggle('sidebar-active');
    }
}