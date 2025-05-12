const testimonialsContainers = document.querySelector('.testimonial-container');
const userText= document.querySelector('.user-text');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const userRole= document.querySelector('.role');

const testimonials = [
    {
        name: 'Leia Organa',
        position: 'Political and militay leader',
        photo:
            'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlcyUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        text:
            "I would rather be a monster that believes in something, that would sacrifice everything to make the galaxy better, than be someone who sits on the sidelines and watches as if it has no consequences to them.",
    },
    {
        name: 'Asajj Ventress',
        position: 'Sith and nightsister',
        photo:
            'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZlbWFsZXMlMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        text:
            "None of this was my choice! I never asked to be ripped away from my home! From…my family. You'll never know what it's like.I wish I didn't…but I do.",
    },
    {
        name: 'Ahsoka Tano',
        position: 'Former Jedi Padawan',
        photo:
            'https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZlbWFsZXMlMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        text:
            "In my life, when you find people who need your help, you help them, no matter what.",
    },
    {
        name: 'Jyn Erso',
        position: 'Soldier and former criminal',
        photo:
            'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZlbWFsZXMlMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        text:
            "I'm Jyn Erso. Daughter of Galen and Lyra. You've lost. Oh I have, have I? My father's revenge. He built a flaw in the Death Star. He put a fuse in the middle of your machine. And I've just told the entire galaxy how to light it.",
    },
    {
        name: 'Padme Amidala',
        position: 'Senator',
        photo:
            'https://images.unsplash.com/photo-1439778615639-28529f7628bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlcyUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        text:
            "To those who act as agents of chaos, I say this: I stand resolute and unyielding. And if you strike my voice down, know that a chorus of thousands shall rise up in its place, for you have no dominion over the righteous. We are the defenders of truth.",
    },
    {
        name: 'Aayla Secura',
        position: 'Jedy Knight',
        photo:
            'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlcyUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        text:
        "Sometimes it takes courage to stick to one's beliefs, young Padawan.",
    },
]

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];
    userText.innerHTML = text;
    userImage.src = photo;
    userName.innerHTML = name;
    userRole.innerHTML = position;

    idx++;

    if(idx > testimonials.length - 1) {
        idx = 0;
    }
}
setInterval(updateTestimonial, 10000);
