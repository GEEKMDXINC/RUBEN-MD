
/** Copyright (C) 2022. Licensed under the  GPL-3.0 License; You may not use this file except in compliance with the License. It is supplied in the hope that it may be useful. * @project_name : Ruben-MD * @author : Votre nom <votre_lien_github> * @description : Ruben, Un bot WhatsApp multifonctionnel. * @version 0.0.1 **/

const os = require('os');
const moment = require("moment-timezone");
const fs = require("fs");
const Config = require('../config');
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const Ruben = require('../lib/commands');

Ruben.cmd({
    pattern: "help",
    alias: ["menu"],
    desc: "Liste d'aide",
    category: "général",
    react: "✨",
    filename: __filename
}, async (Void, citel, text) => {
    const { commands } = require('../lib');
    if (text.split(" ")[0]) {
        let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌Aucune commande correspondante.*");
        else arr.push(`*🍁Commande:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Catégorie:* ${cmd.category}`);
        if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
        if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
        if (cmd.use) arr.push(`*〽️Utilisation:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
        return await citel.reply(arr.join('\n'));
    } else {
        const cmds = {}
        commands.map(async (command, index) => {
            if (command.dontAddCommandList === false && command.pattern !== undefined) {
                if (!cmds[command.category]) cmds[command.category] = []
                cmds[command.category].push(command.pattern)
            }
        })
        const time = moment(moment())
            .format('HH:mm:ss')
        moment.tz.setDefault('Europe/Paris')
            .locale('fr')
        const date = moment.tz('Europe/Paris').format('DD/MM/YYYY')
        let total = await sck1.countDocuments()
        let str = `╭────《 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 》─────⊷\n`
        str += '```' + `│ ╭──────────────◆│ │ Utilisateur : ${citel.pushName}│ │ Thème : ${tlang().title}│ │ Préfixe : [ ${prefix} ]│ │ Propriétaire : ${Config.ownername}│ │ Plugins : ${commands.length}│ │ Utilisateurs : ${total}│ │ Temps d'activité : ${runtime(process.uptime())}│ │ Mémoire : ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}│ │ Heure : ${time}│ │ Date : ${date}│ ╰──────────────◆╰───────────────⊷\n` + '```'
        for (const category in cmds) {
            str += `╭────❏ *${tiny(category)}* ❏\n`;
            if (text.toLowerCase() == category.toLowerCase()) {
                str = `╭─────❏ *${tiny(category)}* ❏\n`;
                for (const plugins of cmds[category]) {
                    str += `│ ${fancytext(plugins, 1)}\n`;
                }
                str += `╰━━━━━━━━━━━━━──⊷\n`;
                break;
            } else {
                for (const plugins of cmds[category]) {
                    str += `│ ${fancytext(plugins, 1)}\n`;
                }
                str += `╰━━━━━━━━━━━━━━──⊷\n`;
            }
        }
        str += `*⭐️Tapez :* _${prefix}help nom_de_la_commande_ pour en savoir plus sur une commande spécifique.\n*Exemple :* _${prefixVoici le fichier de menu personnalisé pour Ruben-MD :


/** Copyright (C) 2022. Licensed under the  GPL-3.0 License; You may not use this file except in compliance with the License. It is supplied in the hope that it may be useful. * @project_name : Ruben-MD * @author : Your Name <your_github_link> * @description : Ruben, A Multi-functional whatsapp bot. * @version 0.0.1 **/

const os = require('os');
const moment = require("moment-timezone");
const fs = require("fs");
const Config = require('../config');
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const Ruben = require('../lib/commands');

Ruben.cmd({
    pattern: "help",
    alias: ["menu"],
    desc: "Help list",
    category: "general",
    react: "✨",
    filename: __filename
}, async (Void, citel, text) => {
    const { commands } = require('../lib');
    if (text.split(" ")[0]) {
        let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No matching command.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
        if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
        if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
        if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
        return await citel.reply(arr.join('\n'));
    } else {
        const cmds = {}
        commands.map(async (command, index) => {
            if (command.dontAddCommandList === false && command.pattern !== undefined) {
                if (!cmds[command.category]) cmds[command.category] = []
                cmds[command.category].push(command.pattern)
            }
        })
        const time = moment(moment())
            .format('HH:mm:ss')
        moment.tz.setDefault('Europe/Paris')
            .locale('en')
        const date = moment.tz('Europe/Paris').format('DD/MM/YYYY')
        let total = await sck1.countDocuments()
        let str = `╭────《 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 》─────⊷\n`
        str += '```' + `│ ╭──────────────◆│ │ User: ${citel.pushName}│ │ Theme: ${tlang().title}│ │ Prefix: [ ${prefix} ]│ │ Owner: ${Config.ownername}│ │ Plugins: ${commands.length}│ │ Users: ${total}│ │ Uptime: ${runtime(process.uptime())}│ │ Memory: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}│ │ Time: ${time}│ │ Date: ${date}│ ╰──────────────◆╰───────────────⊷\n` + '```'
        for (const category in cmds) {
            str += `╭────❏ *${tiny(category)}* ❏\n`;
            if (text.toLowerCase() == category.toLowerCase()) {
                str = `╭─────❏ *${tiny(category)}* ❏\n`;
                for (const plugins of cmds[category]) {
                    str += `│ ${fancytext(plugins, 1)}\n`;
                }
                str += `╰━━━━━━━━━━━━━──⊷\n`;
                break;
            } else {
                for (const plugins of cmds[category]) {
                    str += `│ ${fancytext(plugins, 1)}\n`;
                }
                str += `╰━━━━━━━━━━━━━━──⊷\n`;
            }
        }
        str += `*⭐️Type :* _${prefix}help command_name_ to know more about a specific command.\n*Example :* _${prefix}help command_name_\n\n` +
            "Powered by Ruben-MD";
        await citel.reply(str);
    }
});
```

Assurez-vous de remplacer "Your Name" par votre nom et "your_github_link" par votre lien GitHub dans l'en-tête du fichier.

Ce fichier de menu personnalisé pour Ruben-MD affiche