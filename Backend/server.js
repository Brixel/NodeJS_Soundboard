import { ttsGenerateWavFile, ttsSay, ttsGetVoices } from "./modules/tts.js";
import { playSound, cancelSound, pauseSound } from "./modules/fragmentPlayer.js"
import { mqttTopics, mqttSpawn } from "./modules/mqtt.js"
import { Observable } from "rxjs"
// ttsGetVoices();
// playSound("../effects/audio.mp3");
mqttTopics(["/effects", "/tts"])

mqttSpawn.subscribe((o) => {
    console.log("tttt:::::", o.topic)
    ttsSay(o.topic, "Microsoft David Desktop", 1.25);
})

// await new Promise(resolve => setTimeout(resolve, 10000));
// cancelSounds();
// ttsSay("There is a pull request waiting", "Microsoft David Desktop", 1.25);
// ttsSay("I hope it works on the raspberri", "Microsoft David Desktop", 1.25);