const jokes = document.querySelector('#jokes');
const btn = document.querySelector('.btn');

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data =  await res.json();
    jokes.innerHTML = data.joke;
}
generateJoke();

btn.addEventListener('click', generateJoke);

