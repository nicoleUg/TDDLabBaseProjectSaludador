export function saludar({ nombre } = {}) {
  if (nombre && nombre.trim()) {
    return `Hola, ${nombre.trim()}`;
  }
  return "Hola";
}
