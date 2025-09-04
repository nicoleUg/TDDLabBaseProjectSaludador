import { saludar } from "./saludador.js";

const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado");
const inputNombre = document.querySelector("#nombre");
const selectGenero = document.querySelector("#genero");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const saludo = saludar({
    nombre: inputNombre?.value,
    genero: selectGenero?.value,
    hora: new Date().getHours(),
    permitirHoraSinNombre: true, // UI: muestra "Buenos …" aunque no haya nombre
  });

  div.textContent = saludo;
});
