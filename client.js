const sock = makeWASocket({
    logger: P({ level: 'silent' }),
        printQRInTerminal: false,
        browser: [ "Ubuntu", "Chrome", "20.0.04" ],
        syncFullHistory: true,
        generateHighQualityLinkPreview: true,
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, P({ level: "fatal" }).child({ level: "fatal" }))
        },


    sock.ev.on('creds.update', saveCreds);