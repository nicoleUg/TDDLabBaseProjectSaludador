import { saludar } from "./saludador.js";

const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado");
const inputNombre = document.querySelector("#nombre");
const selectGenero = document.querySelector("#genero");
const inputEdad = document.querySelector("#edad");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const edadVal = inputEdad?.value ? Number(inputEdad.value) : undefined;

  const saludo = saludar({
    nombre: inputNombre?.value,
    genero: selectGenero?.value,
    edad: edadVal,
    hora: new Date().getHours(),
    permitirHoraSinNombre: true, 
  });

  div.textContent = saludo;
});
