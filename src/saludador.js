function saludoSegunHora(hora) {
  if (hora >= 5 && hora < 12) return "Buenos días";
  if (hora >= 12 && hora < 19) return "Buenas tardes";
  return "Buenas noches";
}

function tratamientoPorGenero(genero) {
  const g = (genero || "").toString().trim().toUpperCase();
  if (g === "M") return "Señorito";
  if (g === "F") return "Señorita";
  return "";
}

function tratamientoPorGeneroyEdad(genero, edad) {
  const g = (genero || "").toString().trim().toUpperCase();

  
  if (!g && Number.isFinite(edad) && edad > 30) return "Sr.";

  if (g === "M") {
    if (Number.isFinite(edad)) return edad < 30 ? "Chico" : "Sr.";
    return "Señorito"; 
  }
  if (g === "F") {
    if (Number.isFinite(edad)) return edad < 30 ? "Chica" : "Sra.";
    return "Señorita"; 
  }
  return "";
}

export function saludar({
  nombre,
  hora,
  genero,
  edad,
  permitirHoraSinNombre = false,
} = {}) {
  const nombreTrim = (nombre || "").trim();

  
  if (!nombreTrim) {
    if (permitirHoraSinNombre && typeof hora === "number") {
      return saludoSegunHora(hora);
    }
    return "Hola";
  }

  
  const tieneEdad = Number.isFinite(edad);
  const prefijo = tieneEdad
    ? tratamientoPorGeneroyEdad(genero, edad)
    : tratamientoPorGenero(genero);

  const nombreConTrat = prefijo ? `${prefijo} ${nombreTrim}` : nombreTrim;

  
  if (typeof hora !== "number") {
    return `Hola, ${nombreConTrat}`;
  }


  const base = saludoSegunHora(hora);
  return `${base}, ${nombreConTrat}`;
}
