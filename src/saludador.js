function saludoSegunHora(hora) {
  if (hora >= 5 && hora < 12) return "Buenos días";
  if (hora >= 12 && hora < 19) return "Buenas tardes";
  return "Buenas noches";
}

function tratamientoPorGenero(genero) {
  const g = (genero || "").toString().trim().toUpperCase();
  if (g === "M") return "Señorito";
  if (g === "F") return "Señorita";
  return ""; // otros valores => sin tratamiento
}

/**
 * permitirHoraSinNombre (opcional):
 *  - false (por defecto): sin nombre => "Hola" (para no romper tus tests).
 *  - true (solo en la UI): sin nombre + hora => "Buenos días/tardes/noches".
 */
export function saludar({
  nombre,
  hora,
  genero,
  permitirHoraSinNombre = false,
} = {}) {
  const nombreTrim = (nombre || "").trim();

  // Sin nombre
  if (!nombreTrim) {
    if (permitirHoraSinNombre && typeof hora === "number") {
      return saludoSegunHora(hora);
    }
    return "Hola";
  }

  // Con nombre
  const prefijo = tratamientoPorGenero(genero);
  const nombreConTrat = prefijo ? `${prefijo} ${nombreTrim}` : nombreTrim;

  // Sin hora => "Hola, [Sr./Sra.] Nombre"
  if (typeof hora !== "number") {
    return `Hola, ${nombreConTrat}`;
  }

  // Con hora => "Buenos X, [Sr./Sra.] Nombre"
  const base = saludoSegunHora(hora);
  return `${base}, ${nombreConTrat}`;
}
