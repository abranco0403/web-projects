const container = document.getElementById('container');

const colors = ['#FDFF00', '#EA82E5', '#46BFEE', '#D03E19', '#DB851C', '#FFFFFF'];

const circles = 500;

for(let i = 0; i < circles; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    circle.addEventListener('mouseover', () => setColor(circle));
    circle.addEventListener('mouseout', () => removeColor(circle));

    container.appendChild(circle);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000000`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}