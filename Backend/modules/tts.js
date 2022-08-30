import say from 'say'

import * as dotenv from 'dotenv'

import * as PATH from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

//#endregion // Imports / Exports //

//#region // Constants //
//Available voices for linux variable only for testing
let voices = [
    "voice_cmu_us_clb_cg",
    "voice_cmu_us_gka_cg",
    "voice_cmu_us_jmk_cg",
    "voice_cmu_us_bdl_cg",
    "voice_cmu_us_awb_cg",
    "voice_cmu_us_rxr_cg",
    "voice_cmu_us_aew_cg",
    "voice_cmu_us_rms_cg",
    "voice_cmu_us_slt_cg",
    "voice_cmu_us_ksp_cg",
    "voice_cmu_us_axb_cg",
    "voice_cmu_us_ahw_cg",
    "voice_cmu_us_aup_cg",
    "voice_cmu_us_fem_cg",
    "voice_kal_diphone"]

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: PATH.resolve(__dirname, '../.env') })
//#endregion // Constants //

//#region // Functions //
const ttsSay = async (text) => {
    await say.speak(text, process.env.TTS_VOICE, process.env.TTS_VOICE_SPEED, (err) => {
        if (err) {
            return console.error(err)
        }
        console.log('Text has been spoken.')
    });
}

//Only Linux
const ttsGetVoices = () => {
    say.getInstalledVoices((err, voices) => {
        if (err) {
            return console.error(err)
        }
        console.log(`Current available voices: ${voices}`)
    });
}

//#endregion // Functions //

export { ttsGetVoices, ttsSay }