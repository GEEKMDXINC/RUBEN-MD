const fs = require('fs-extra');

if (fs.existsSync('config.env')) {
  require('dotenv').config({ path: __dirname + '/config.env' });
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'Ruben-MD',
OWNER: process.env.NUMERO_OWNER || '237693755398', 
STATUS: process.env.LECTURE_AUTO_STATUS || 'oui' 
 PREFIX: process.env.PREFIX || '.',
   MODE: process.env.MODE || 'prive',
};