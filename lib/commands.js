const commands = require('./lib/commands');

// ...

// Charge les commandes
commands.forEach((command) => {
  Ruben.cmd(command);
});