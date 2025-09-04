import { saludar } from "./saludador.js";

const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const saludo = saludar({});
  div.textContent = saludo;
});
