const fs = require('fs-extra');

if (fs.existsSync('config.env')) {
  require('dotenv').config({ path: __dirname + '/config.env' });
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'SLG-MD~36rmv3ck',
OWNER: process.env.NUMERO_OWNER || '', 
STATUS: process.env.LECTURE_AUTO_STATUS || 'oui' 
 PREFIX: process.env.PREFIX || '.',
   MODE: process.env.MODE || 'prive',
};