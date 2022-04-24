const hamburger_menu = document.querySelector('.hamburger-menu');
const close_btn = document.querySelector('.close-btn');
const navigation = document.querySelector('.navigation');
const featured_buttons = document.querySelector('.featured-buttons');
const full_navigation = document.querySelector('.full-nav');
const connect_btn = document.querySelector('.connect-btn');
const dropdown_content = document.querySelector('.connect--dropdown-content');


window.addEventListener("resize", () => {
    if (hamburger_menu.clicked === true) {
        if (window.matchMedia("(max-width: 889px)").matches) {
            full_navigation.style.visibility = "visible";
            navigation.style.visibility = "visible";
            featured_buttons.style.visibility = "visible";
            dropdown_content.style.visibility = "visible";
        }
    }
});

connect_btn.addEventListener('click', () => {
    dropdown_content.classList.toggle('hidden');
    dropdown_content.classList.remove('grid');
});

hamburger_menu.addEventListener('click', () => {
    hamburger_menu.classList.add('hidden');
    close_btn.classList.remove('hidden');
    full_navigation.style.visibility = "visible";
    navigation.style.visibility = "visible";
    dropdown_content.style.visibility = "visible";
    featured_buttons.style.visibility = "visible";
});


close_btn.addEventListener('click', () => {
    hamburger_menu.classList.remove('hidden');
    close_btn.classList.add('hidden');
    full_navigation.style.visibility = "hidden";
    navigation.style.visibility = "hidden";
    featured_buttons.style.visibility = "hidden";
});