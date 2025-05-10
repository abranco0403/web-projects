function navEffect() {
    const open_btn = document.querySelector('.open-btn');
    const close_btn = document.querySelector('.close-btn');
    const nav = document.querySelectorAll('.nav');
    open_btn.addEventListener('click', () => {
        nav.forEach(nav_el => nav_el.classList.add('visible'));
    });
    close_btn.addEventListener('click', () => {
        nav.forEach(nav_el => nav_el.classList.remove('visible'));
    });
}
function linkHoverEffect() {
    const dropdown =  document.querySelector('.dropdown');
    const dropdownMenu =  document.querySelector('.dropdown-menu');
    dropdown.addEventListener('mouseover', () => {
        dropdownMenu.classList.toggle('active');
    });
}
navEffect();
linkHoverEffect()


