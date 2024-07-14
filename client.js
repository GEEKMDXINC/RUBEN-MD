const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Création d'un client WhatsApp
const client = new Client();

// Événement de connexion
client.on('qr', (qr) => {
    // Génération du code QR
    qrcode.generate(qr, { small: true });
});

// Événement de connexion réussie
client.on('ready', () => {
    console.log('Bot connecté à WhatsApp');
});

// Événement de réception de message
client.on('message', async (msg) => {
    // Vérification du numéro de téléphone de l'émetteur
    if (msg.from.includes('@c.us')) {
        // Traitement du message reçu
        console.log(`Nouveau message de ${msg.from}: ${msg.body}`);
        
        // Réponse automatique
        await client.sendMessage(msg.from, 'Bonjour ! Je suis le bot Ruben-MD. Comment puis-je vous aider ?');
    }
});

// Démarrage du client WhatsApp
client.initialize();