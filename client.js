const axios = require("axios");
const config = require("./config");
const pino = require("pino");
const path = require('path');
const { default: makeWASocket, useMultiFileAuthState, logger, delay, makeCacheableSignalKeyStore } = require("ovl_wa_baileys");


async function slgAuth() {
    if (!config.SESSION_ID) {
        console.log('veillez ajouté une session id dans votre config');
     process.exit(1);
    }
    const sessdata = config.SESSION_ID.split("SLG-MD~")[1];
    const url = `https://pastebin.com/raw/${sessdata}`;
    try {
        const response = await axios.get(url);
        const data = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
        await fs.promises.writeFile(credsPath, data);
        console.log("🔒 Session téléchargée avec succès !!");
    } catch (error) {
        console.error('erreur lors de la récupération de la session id sur pastebin:', error);
        process.exit(1);
    }
}

async function main() {

 slgAuth();

  const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, 'auth'));
        const slg = makeWASocket({
            printQRInTerminal: true,
            logger: pino({ level: "silent" }),
            browser: [ "Ubuntu", "Chrome", "20.0.04" ],
            generateHighQualityLinkPreview: true,
            syncFullHistory: false,
            auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" }).child({ level: "silent" }))
        },
    slg.ev.on('creds.update', saveCreds)

main(),

