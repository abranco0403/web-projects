const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const img = document.querySelectorAll('#imgs img');

//carousel functioning
let idx = 0;

let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImg();
}
function changeImg() {
    if(idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }
    imgs.style.transform = `translateX(${-idx*500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
    idx++;
    changeImg();
    resetInterval();
});

leftBtn.addEventListener('click', () => {
    idx--;
    changeImg();
    resetInterval();
});

/****************************** */
//buttons styling -  hover effect
const btns = document.querySelectorAll('.btn');

for(let btn of btns) {
    btn.addEventListener('mouseover', (e) => {
        e.target.style.cssText = `
        background-color: #ffffff;
        color: #000000;
        font-weight: bold;
        border: none;
        `
    });
    btn.addEventListener('mouseout', (e) => {
        e.target.style.cssText = `
        background-color: #000000;
        font-weight: 400;
        color: #ffffff;
        border: 2px solid #ae9090;;
        `
    });
}






