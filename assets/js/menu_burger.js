const menu_icon = document.querySelector('.menu_icon');
const menu_body = document.querySelector('.menu_body');

if (menu_icon) {
    menu_icon.addEventListener("click", function (e) {
        menu_icon.classList.toggle('active_menu_icon')
    })
}

if (menu_body) {
    menu_icon.addEventListener("click", function (e) {
        menu_body.classList.toggle('active_menu_body')
    })
}