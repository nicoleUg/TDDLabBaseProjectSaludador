import { saludar } from "./saludador.js";

const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado");
const inputNombre = document.querySelector("#nombre");
const selectGenero = document.querySelector("#genero");
const inputEdad = document.querySelector("#edad");

const btnEs = document.querySelector("#btn-es");
const btnEn = document.querySelector("#btn-en");

let idioma = "es"; 

function activar(idiomaSeleccionado) {
  idioma = idiomaSeleccionado;
  
  btnEs?.classList.toggle("active", idioma === "es");
  btnEn?.classList.toggle("active", idioma === "en");
}

btnEs?.addEventListener("click", () => activar("es"));
btnEn?.addEventListener("click", () => activar("en"));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const edadVal = inputEdad?.value ? Number(inputEdad.value) : undefined;

  const saludo = saludar({
    nombre: inputNombre?.value,
    genero: selectGenero?.value,
    edad: edadVal,
    hora: new Date().getHours(),
    idioma,                      
    permitirHoraSinNombre: true,   
  });

  div.textContent = saludo;
});
