const axios = require("axios");
const fs = require("fs");
const pino = require("pino");
const path = require('path');
const { makeWASocket, useMultiFileAuthState, logger, delay, makeCacheableSignalKeyStore } = require("ovl_wa_baileys");

const credsPath = path.join(__dirname, 'auth');

async function slgAuth() {
    if (!config.SESSION_ID) {
        console.log('Veuillez ajouter une session id dans votre config');
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
        console.error('Erreur lors de la récupération de la session id sur pastebin:', error);
        process.exit(1);
    }
}

async function main() {
    await slgAuth();

    const { state, saveCreds } = await useMultiFileAuthState(credsPath);
    const slg = makeWASocket({
        printQRInTerminal: true,
        logger: pino({ level: "silent" }),
        browser: [ "Ubuntu", "Chrome", "20.0.04" ],
        generateHighQualityLinkPreview: true,
        syncFullHistory: false,
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" }).child({ level: "silent" }))
        }
    });

    slg.ev.on('creds.update', saveCreds);

    // Ajouter d'autres fonctionnalités ici
}

main();
