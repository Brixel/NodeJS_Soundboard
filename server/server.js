// automatically pick platform
// const say = require('say')
import { ttsGenerateWavFile, ttsSay, ttsGetVoices } from "./modules/tts.js";

ttsGetVoices();
ttsSay("Bonne nuit", "Microsoft David Desktop", 1);

/*

// Fire a callback once the text has completed being spoken
say.speak("Hallo, ik ben James. waar kan ik u mee helpen", 'Microsoft David Desktop', 1.2, (err) => {
    if (err) {
        return console.error(err)
    }
    console.log('Text has been spoken.')
});

say.getInstalledVoices((err, d) => {
    if (err) {
        return console.error(err)
    }
    console.log(d)
});
// // Export spoken audio to a WAV file
// say.export("I'm sorry, Dave.", 'Cellos', 0.75, 'hal.wav', (err) => {
//     if (err) {
//         return console.error(err)
//     }

//     console.log('Text has been saved to hal.wav.')
// })*/