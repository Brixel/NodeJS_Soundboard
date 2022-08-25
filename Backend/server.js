// import { ttsGenerateWavFile, ttsSay, ttsGetVoices } from "./modules/tts.js";
import { playSound, cancelSound, pauseSound } from "./modules/fragmentPlayer.js"
import { mqttTopics, mqttSpawn } from "./modules/mqtt.js"
import { Observable } from "rxjs"
// ttsGetVoices();
playSound("../audio/audio.mp3");
mqttTopics(["/tts", "/effects"])

mqttSpawn.subscribe((o) => {
    console.log("tttt:::::", o)
})
// await new Promise(resolve => setTimeout(resolve, 10000));
// cancelSounds();
// ttsSay("Something has finished warming up", "Microsoft David Desktop", 1.25);
// ttsSay("There is a pull request waiting", "Microsoft David Desktop", 1.25);
// ttsSay("I hope it works on the raspberri", "Microsoft David Desktop", 1.25);