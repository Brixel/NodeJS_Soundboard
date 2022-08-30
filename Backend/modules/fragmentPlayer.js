import { exec } from "child_process";

const playSound = async (soundPath, volume) => {
    let command = ` nvlc ${soundPath} --gain=${volume}`
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

export { playSound };