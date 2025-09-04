function saludoSegunHora(hora, idioma) {
  if (idioma === "en") {
    if (hora >= 5 && hora < 12) return "Good morning";
    if (hora >= 12 && hora < 19) return "Good afternoon";
    return "Good evening";
  }
  if (hora >= 5 && hora < 12) return "Buenos días";
  if (hora >= 12 && hora < 19) return "Buenas tardes";
  return "Buenas noches";
}

function tratamientoPorGeneroES(genero) {
  const g = (genero || "").toString().trim().toUpperCase();
  if (g === "M") return "Señorito";
  if (g === "F") return "Señorita";
  return "";
}

function tratamientoPorGeneroyEdadES(genero, edad) {
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

function tratamientoEN(genero, edad) {
  const g = (genero || "").toString().trim().toUpperCase();
  if (g === "M") return "Mr.";
  if (g === "F") return "Ms.";
  if (Number.isFinite(edad) && edad > 30) return "Mr.";
  return "";
}

export function saludar({
  nombre,
  hora,
  genero,
  edad,
  idioma = "es",
  permitirHoraSinNombre = false,
} = {}) {
  const nombreTrim = (nombre || "").trim();

  if (!nombreTrim) {
    if (permitirHoraSinNombre && typeof hora === "number") {
      return saludoSegunHora(hora, idioma);
    }
    return idioma === "en" ? "Hello" : "Hola";
  }

  let prefijo = "";
  if (idioma === "en") {
    prefijo = tratamientoEN(genero, edad);
  } else {
    prefijo = Number.isFinite(edad)
      ? tratamientoPorGeneroyEdadES(genero, edad)
      : tratamientoPorGeneroES(genero);
  }

  const nombreConTrat = prefijo ? `${prefijo} ${nombreTrim}` : nombreTrim;

  if (typeof hora !== "number") {
    return idioma === "en" ? `Hello, ${nombreConTrat}` : `Hola, ${nombreConTrat}`;
  }

  const base = saludoSegunHora(hora, idioma);
  return `${base}, ${nombreConTrat}`;
}
