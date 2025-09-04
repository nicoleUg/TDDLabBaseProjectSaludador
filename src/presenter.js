import { saludar } from "./saludador.js";

const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado");
const inputNombre = document.querySelector("#nombre"); 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const horaActual = new Date().getHours();

  const saludo = saludar({
    nombre: inputNombre?.value,
    hora: horaActual,
    permitirHoraSinNombre: true,  
  });

  div.textContent = saludo;
});
