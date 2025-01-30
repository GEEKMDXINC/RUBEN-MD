

/**
███████╗██╗      ██████╗       ███╗   ███╗██████╗ 
██╔════╝██║     ██╔════╝       ████╗ ████║██╔══██╗
███████╗██║     ██║  ███╗█████╗██╔████╔██║██║  ██║
╚════██║██║     ██║   ██║╚════╝██║╚██╔╝██║██║  ██║
███████║███████╗╚██████╔╝      ██║ ╚═╝ ██║██████╔╝
╚══════╝╚══════╝ ╚═════╝       ╚═╝     ╚═╝╚═════╝
**/
const config = require("./config");
const préfixe = config.PREFIX ;
const axios = require("axios");
const fs = require("fs");
const pino = require("pino");
const path = require('path');
const {
    default: makeWASocket,
    useMultiFileAuthState,
    logger,
    delay,
    makeCacheableSignalKeyStore,
    jidDecode,
    getContentType,
    downloadContentFromMessage,
    makeInMemoryStore,
    fetchLatestBaileysVersion,
    DisconnectReason
} = require("ovl_wa_baileys");

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

    const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });

    const { state, saveCreds } = await useMultiFileAuthState(credsPath);
    const { version, isLatest } = await fetchLatestBaileysVersion();
    const slg = makeWASocket({
        printQRInTerminal: true,
        logger: pino({ level: "silent" }),
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        generateHighQualityLinkPreview: true,
        syncFullHistory: false,
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" }))
        }
    });

    // Correction de la fonction getMessage
    slg.getMessage = async (key) => {
        const msg = await store.loadMessage(key.remoteJid, key.id);
        return msg.message;
    };

    store.bind(slg.ev);

    slg.ev.on('creds.update', saveCreds);

    // Ajouter d'autres fonctionnalités ici
    slg.ev.on("messages.upsert", async (m) => {
        const { messages } = m;
        const ms = messages[0];
        if (!ms.message) return;

        const decodeJid = (jid) => {
            if (!jid) return jid;
            if (/:\d+@/gi.test(jid)) {
                let decode = jidDecode(jid) || {};
                return decode.user && decode.server ? decode.user + '@' + decode.server : jid;
            } else {
                return jid;
            }
        };

        // Traitez le message ici
    });
}

// déclaration des vars utiles
 
const mtype = getContentType(ms.message);
    const texte = {
    conversation: ms.message.conversation,
    imageMessage: ms.message.imageMessage?.caption,
    videoMessage: ms.message.videoMessage?.caption,
    extendedTextMessage: ms.message.extendedTextMessage?.text,
    buttonsResponseMessage: ms.message.buttonsResponseMessage?.selectedButtonId,
    listResponseMessage: ms.message.listResponseMessage?.singleSelectReply?.selectedRowId,
    messageContextInfo: ms.message.buttonsResponseMessage?.selectedButtonId ||
        ms.message.listResponseMessage?.singleSelectReply?.selectedRowId || ms.text
    }[mtype] || "";
    
  const pseudo = ms.pushName;
    const dest = slg.user.id
    const ms_org = ms.key.remoteJid;
    const id_Bot = decodeJid(slg.user.id);
    const id_Bot_N = id_Bot.split('@')[0];
    const verif_Gp = ms_org?.endsWith("@g.us");
    const msg_Repondu = ms.message.extendedTextMessage?.contextInfo?.quotedMessage;
    const auteur_Msg_Repondu = decodeJid(ms.message.extendedTextMessage?.contextInfo?.participant);
    const mr = ms.message.extendedTextMessage?.contextInfo?.mentionedJid;
    const auteur_Message = verif_Gp ? ms.key.participant : decodeJid(ms.key.fromMe ? id_Bot : ms.key.remoteJid);
    const membre_Gp = verif_Gp ? ms.key.participant : '';
    const arg = texte ? texte.trim().split(/ +/).slice(1) : null;
    const verif_Cmd = texte ? texte.startsWith(prefixe) : false;
    const cmds = verif_Cmd ? texte.slice(prefixe.length).trim().split(/ +/).shift().toLowerCase() : false;
    
    


let devss = ['237693755398', '237621713181']; 
/*
const devss_id = devss.map(v => v.replace(/[^0-9]/g, '') + "@s.whatsapp.net");

                let isCreator = [...devss,id_bot_N,...config.NUMERO_OWNER.split(",")].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(auteur_message);
               
                if (!isCreator && config.MODE === 'prive'){ return }
             */
   if (ms.key && ms.key.remoteJid === 'status@broadcast' && config.LECTURE_AUTO_STATUS === "oui"){
await slg.readMessages([mek.key])
}
              /* if ((!devss_id && auteur_Message !== '221772430620@s.whatsapp.net') && ms_org === "120363314687943170@g.us") {
                return;
                } */
 function repondre(message) {
        slg.sendMessage(ms_org, { text: message }, { quoted: ms });
 };

 
   const com_options = {
    pseudo,
    dest,
    ms_org,
    id_Bot,
    id_Bot_N,
    verif_Gp,
    msg_Repondu,
    auteur_Msg_Repondu,
    mr,
    auteur_Message,
    membre_Gp,
    arg,
   prefix,
  répondre,
    verif_Cmd,
    cmds
};

slg.ev.on("connection.update", async (con) => {
    const { connection, lastDisconnect } = con;

    if (connection === "connecting") {
        console.log("🌐 Connexion à WhatsApp en cours...");
    } else if (connection === 'open') {
        console.log("✅ Connexion établie ; Le bot est en ligne 🌐\n\n");

       
      let start_msg =  `\`\`\`Bot Connected\nVersion: 1.0.0\nTotal Plugins: 0\nWorktype: undifined\`\`\``;
     
        await slg.sendMessage(slg.user.id, { text: start_msg }); 
     
    } else if (connection === 'close') {
                if (lastDisconnect.error?.output?.statusCode === DisconnectReason.loggedOut) {
                    console.log('Connexion fermée: Déconnecté');
                } else {
                    console.log('Connexion fermée: Reconnexion en cours...');

main();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
res.send("hey, bot startedâœ…");
});
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));