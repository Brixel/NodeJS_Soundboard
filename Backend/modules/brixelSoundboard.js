import { playSound, cancelSound, pauseSound } from "./fragmentPlayer.js"
import { ttsSay } from "./tts.js";
import { mqttTopics, mqttSpawn } from "./mqtt.js"


const SoundboardInit = () => {
    mqttTopics(["/effects", "/tts"])
}

mqttSpawn.subscribe((o) => {
    console.log("Received packet:::::::", o);
    switch (true) {
        case o.topic == "/brixel/room1/tts":
            ttsSay(o.payload);
            break;
        case o.topic == "/brixel/room1/effects":
            // playSound()
            break;
        default:
            console.log('topic not yet implemented')
            break;
    }
})

export { SoundboardInit }