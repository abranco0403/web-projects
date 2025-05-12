// Button animation
const toggle = document.querySelector('#toggle');
const nav = document.querySelector('#nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Hover Effect
const links = document.querySelectorAll('.navbar a[href^="#"]');
console.log(links);

for(let link of links) {
    link.addEventListener('mouseup', (e) => {
        e.target.classList.toggle('active');
    });
}
