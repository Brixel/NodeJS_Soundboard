import say from 'say'

const ttsSay = async (text, voice, speed) => {
    await say.speak(text, voice, speed, (err) => {
        if (err) {
            return console.error(err)
        }
        console.log('Text has been spoken.')
    });
}

const ttsGetVoices = () => {
    say.getInstalledVoices((err, voices) => {
        if (err) {
            return console.error(err)
        }
        console.log(`Current available voices: ${voices}`)
    });
}

// Export spoken audio to a WAV file
const ttsGenerateWavFile = async (text, voice, speed, fileName) => {
    await say.export(text, voice, speed, fileName, (err) => {
        if (err) {
            return console.error(err)
        }
        console.log(`Text has been saved to ${filename}`)
    })
}

export { ttsGenerateWavFile, ttsGetVoices, ttsSay }