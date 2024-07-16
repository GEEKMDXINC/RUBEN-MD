// Fonction pour formater la mémoire utilisée par le bot

const formatMemory = (memory) => {
  const units = ["B", "KB", "MB", "GB"];
  let index = 0;

  while (memory >= 1024 && index < units.length - 1) {
    memory /= 1024;
    index++;
  }

  return `${memory.toFixed(2)} ${units[index]}`;
};

module.exports = {
  formatMemory
};