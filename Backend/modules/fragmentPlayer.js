import Audic from 'audic';
export { playSound, cancelSound, pauseSound };

let audic;
const playSound = async (fragment) => {
    audic = new Audic(fragment);
    console.log('play sound')
    await audic.play();
    audic.addEventListener('ended', () => {
        console.log('sound ended')
        audic.destroy();
    });
}

const cancelSound = () => {
    audic.destroy();
}

const pauseSound = () => {
    audic.pause();
}