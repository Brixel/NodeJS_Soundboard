import { playSound } from "./fragmentPlayer.js"
import { ttsSay } from "./tts.js";
import { mqttTopics, mqttSpawn } from "./mqtt.js"
import * as fs from 'fs'

let soundFragments;

fs.readFile('./soundFragments.json', 'utf8', function (err, data) {
    if (err) throw err;
    soundFragments = JSON.parse(data);
});

const SoundboardInit = () => {
    mqttTopics(["/effects", "/tts"]);
}

const verifyFragment = (reqSound) => {
    let sounds = soundFragments.Fragments
    // console.log(sounds)
    sounds.map((sound) => {
        if (reqSound == sound.Name) {
            console.log("target hit: ")
            playSound(sound.File, sound.volume)
        }
    })
}

mqttSpawn.subscribe(async (o) => {
    console.log("Received packet:::::::", o);
    switch (true) {
        case o.topic == "/brixel/room1/tts":
            ttsSay(o.payload);
            break;
        case o.topic == "/brixel/room1/effects":
            verifyFragment(o.payload)
            break;
        default:
            console.log('topic not yet implemented')
            break;
    }
})

export { SoundboardInit }
