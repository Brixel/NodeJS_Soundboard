//#region // Imports / Exports //
import * as MQTT from 'mqtt'
import * as dotenv from 'dotenv'

import * as PATH from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { Observable } from 'rxjs'

//#endregion // Imports / Exports //

//#region // Constants //
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: PATH.resolve(__dirname, '../.env') })

const MQTT_HOST = process.env.MQTT_HOST
const MQTT_PORT = process.env.MQTT_PORT
const MQTT_CLIENT_ID = process.env.MQTT_CLIENT_ID
const connectUrl = `mqtt://${MQTT_HOST}:${MQTT_PORT}`
const client = MQTT.connect(connectUrl, {
    MQTT_CLIENT_ID,
    clean: true,
    connectTimeout: 4000,
    username: process.env.MQTT_UNAME,
    password: process.env.MQTT_PASSWD,
    reconnectPeriod: 1000,
})
//#endregion // Constants //

//#region // MQTT CODE //
const mqttTopics = (topics) => {
    client.on('connect', () => {
        console.log('Connected')
        topics.map((topic) => {
            let mqttTopic = process.env.MQTT_ROOT_TOPIC + topic
            client.subscribe([mqttTopic], () => {
                console.log(`Subscribe to topic '${mqttTopic}'`)
            });
        });
    })
}

const mqttSpawn = new Observable((subscriber) => {
    client.on('message', (topic, payload) => {
        subscriber.next(`{ ${topic} : ${payload.toString()}}`)
    })
    client.on('close', () => {
        console.log("mqtt client disconnected")
        subscriber.complete();
    })
    client.on('error', (err) => {
        console.log("An error has occured")
        subscriber.error(err);
    })

})
//#endregion // MQTT //

export { mqttTopics, mqttSpawn }