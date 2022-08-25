import Audic from 'audic';
export { playSound, cancelSounds };

let audic;
const playSound = async (fragment) => {
    audic = new Audic(fragment);
    await audic.play();
    audic.addEventListener('ended', () => {
        audic.destroy();
    });
}

const cancelSounds = () => {
    audic.destroy();
}