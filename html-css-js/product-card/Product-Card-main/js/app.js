const container = document.querySelector('.container');
const color1= document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');
//Changing the colors
color2.addEventListener('click', ()=> {
    container.classList.add('change');
});
color1.addEventListener('click', ()=> {
    container.classList.remove('change');
});
//Changing sizes
const numbers = document.querySelectorAll('.number');
for(let number of numbers) {
    number.addEventListener('click', ()=> {
        number.classList.toggle('selected');
    });
}
