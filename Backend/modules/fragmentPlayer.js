import Audic from 'audic';
export { playSound, cancelSound, pauseSound };

let audic;
const playSound = async (fragment) => {
    audic = new Audic(fragment);
    await audic.play();
    audic.addEventListener('ended', () => {
        audic.destroy();
    });
}

const cancelSound = () => {
    audic.destroy();
}

const pauseSound = () => {
    audic.pause();
}