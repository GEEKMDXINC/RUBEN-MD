// Fonction pour formater le temps d'exécution du bot

const formatRuntime = (runtime) => {
  return `${runtime.toFixed(2)}ms`;
};

module.exports = {
  formatRuntime
};