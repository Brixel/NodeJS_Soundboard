//#region // Constants //
const MQTT = require('mqtt')
const MQTT_HOST = process.env.MQTT_HOST
const MQTT_PORT = process.env.MQTT_PORT
const MQTT_clientId = `mqtt_${Math.random().toString(16).slice(3)}`
const connectUrl = `mqtt://${MQTT_HOST}:${MQTT_PORT}`

const client = MQTT.connect(connectUrl, {
    MQTT_clientId,
    clean: true,
    connectTimeout: 4000,
    username: process.env.MQTT_UNAME,
    password: process.env.MQTT_PASSWD,
    reconnectPeriod: 1000,
})
//#endregion // Constants //


//#region // MQTT CODE //
const topic = process.env.MQTT_ROOT_TOPIC + '/obscure'
client.on('connect', () => {
    console.log('Connected')
    client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`)
    })
    client.publish(topic, 'here is KENNY!', { qos: 0, retain: false }, (error) => {
        if (error) {
            console.error(error)
        }
    })
})
client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
})
//#endregion // MQTT //
