const fs = require('fs-extra');

if (fs.existsSync('config.env')) {
  require('dotenv').config({ path: __dirname + '/config.env' });
}

module.exports = {
  sessionName: process.env.SESSION_NAME || 'Ruben-MD',
  ownerNumber: process.env.OWNER_NUMBER || '237693755398',
  apiKey: process.env.API_KEY || '',
  prefix: process.env.PREFIX || '.',
  mongoURI: process.env.MONGODB_URI || 'mongodb+srv://benzimen:ruben@cluster0.amciu0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  port: process.env.PORT || 3000,
  email: process.env.EMAIL || 'rubenmd@example.com',
  github: process.env.GITHUB || 'https://github.com/GEEKMDXINC/RUBEN-MD',
  location: process.env.LOCATION || 'Yaounde, Cameroun',
  website: process.env.WEBSITE || 'https://rubenmd.com',
  thumbImage: process.env.THUMB_IMAGE || 'https://example.com/thumb.jpg',
  autoReadStatus: process.env.AUTO_READ_STATUS === 'true',
  autoReaction: process.env.AUTO_REACTION === 'true',
  antiBadWord: process.env.ANTI_BAD_WORD || 'off',
  alwaysOnline: process.env.ALWAYS_ONLINE === 'true',
  fakeCountryCode: process.env.FAKE_COUNTRY_CODE || '1',
  readMessage: process.env.READ_MESSAGE === 'true',
  autoStatusSaver: process.env.AUTO_STATUS_SAVER === 'true',
  handlers: process.env.HANDLERS || '.',
  warnCount: process.env.WARN_COUNT || 3,
  disablePM: process.env.DISABLE_PM === 'true',
  levelUpMessage: process.env.LEVEL_UP_MESSAGE === 'true',
  antiLinkValues: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antiLinkAction: process.env.ANTILINK_ACTION || 'remove',
  branch: 'main',
  aliveMessage: process.env.ALIVE_MESSAGE || 'I am alive!',
  autoBio: process.env.AUTO_BIO === 'true',
  caption: process.env.CAPTION || 'Powered by Ruben-MD',
  openAIKey: process.env.OPENAI_API_KEY || '',
  heroku: process.env.HEROKU === 'true',
  herokuAPIKey: process.env.HEROKU_API_KEY || '',
  herokuAppName: process.env.HEROKU_APP_NAME || 'your_heroku_app_name',
  version: process.env.VERSION || 'v1.0.0',
  language: process.env.LANGUAGE || 'en',
  workType: process.env.WORK_TYPE || 'public',
};