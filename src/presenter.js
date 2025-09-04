import { saludar } from "./saludador.js";

const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado");
const inputNombre = document.querySelector("#nombre");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const saludo = saludar({ nombre: inputNombre?.value });
  div.textContent = saludo;
});
