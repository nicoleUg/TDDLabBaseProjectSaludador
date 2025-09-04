function saludoSegunHora(hora) {
  if (hora >= 5 && hora < 12) return "Buenos días";
  if (hora >= 12 && hora < 19) return "Buenas tardes";
  return "Buenas noches";
}


export function saludar({ nombre, hora, permitirHoraSinNombre = false } = {}) {
  const nombreTrim = (nombre || "").trim();


  if (!nombreTrim) {
    if (permitirHoraSinNombre && typeof hora === "number") {
      return saludoSegunHora(hora);         
    }
    return "Hola";                           
  }

  
  if (typeof hora !== "number") {
    return `Hola, ${nombreTrim}`;
  }

  const base = saludoSegunHora(hora);
  return `${base}, ${nombreTrim}`;
}
