// import { ttsGenerateWavFile, ttsSay, ttsGetVoices } from "./modules/tts.js";
import { playSound, cancelSounds } from "./modules/fragmentPlayer.js"
// ttsGetVoices();
playSound("../audio/audio.mp3");
// await new Promise(resolve => setTimeout(resolve, 10000));
// cancelSounds();
// ttsSay("Something has finished warming up", "Microsoft David Desktop", 1.25);
// ttsSay("There is a pull request waiting", "Microsoft David Desktop", 1.25);
// ttsSay("I hope it works on the raspberri", "Microsoft David Desktop", 1.25);