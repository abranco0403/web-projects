const sounds = ['roar', 'kiss', 'bark', 'punch', 'astonished', 'cough' ];

for(let sound of sounds) {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSound();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);

}
function stopSound() {
    for(let sound of sounds) {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    }
}
