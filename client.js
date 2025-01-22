
const pino = require("pino");
const path = require('path');
const { default: makeWASocket, useMultiFileAuthState, logger, delay, makeCacheableSignalKeyStore } = require("ovl_wa_baileys");

async function startSlg() {
  
    const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, 'auth'));
        try {
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


    slg.ev.on('creds.update', saveCreds);

startSlg(),

